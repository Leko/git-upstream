#!/usr/bin/env node
const chalk = require("chalk");
const flow = require("lodash/flow");
const yargs = require("yargs");
const git = require("simple-git/promise")();
const { prompt } = require("enquirer");
const octokit = require("@octokit/rest")();
const getOriginUrl = require("remote-origin-url");
const parseGitUrl = require("git-url-parse");

const UPSTREAM = "upstream";

const main = async options => {
  if (options.token) {
    octokit.authenticate({ type: "token", token: options.token });
  }

  try {
    await getOriginUrl();
  } catch (e) {
    throw new Error(`${process.cwd()} is not a git repository`);
  }
  const originUrl = await getOriginUrl();
  const gitUrl = parseGitUrl(originUrl);

  if (gitUrl.resource !== "github.com") {
    throw new Error(`A resource: ${gitUrl.resource} is not supported`);
  }

  const { owner, name: repo } = gitUrl;
  const { data } = await octokit.repos.get({ owner, repo });
  if (!data.fork) {
    throw new Error(`${owner}/${repo} is not forked repository`);
  }
  const upstream = options.shallow ? data.parent : data.source;
  const upstreamUrl = options.https ? upstream.clone_url : upstream.ssh_url;

  console.log(`${UPSTREAM} is ${upstreamUrl}`);
  if (!options.set) {
    return `Tips: If you want to set it to a remote, please retry with --set`;
  }

  const remotes = await git.getRemotes();
  const hasUpstream = remotes.some(({ name }) => name === UPSTREAM);
  if (hasUpstream) {
    if (!options.force) {
      const response = await prompt({
        type: "confirm",
        name: "yes",
        message: `${UPSTREAM} already exists. Do you want to overwrite?`
      });

      if (!response.yes) {
        return "Canceled";
      }
    }

    await git.removeRemote(UPSTREAM);
  }

  return git
    .addRemote(UPSTREAM, upstreamUrl)
    .then(() => `Add ${UPSTREAM} to a remote`);
};

const argv = yargs
  .scriptName("git-upstream")
  .env("GIT_UPSTREAM")
  .options({
    set: {
      alias: "i",
      type: "boolean",
      description: "Set upstream to a remote",
      default: false
    },
    force: {
      alias: "f",
      type: "boolean",
      description: "Force overwrite even if upstream already exists",
      default: false
    },
    token: {
      alias: "t",
      type: "string",
      description: "GitHub access token for private repository"
    },
    shallow: {
      type: "boolean",
      description: "Prefer parent fork(default) or ancestor fork",
      default: true
    },
    https: {
      type: "boolean",
      description: "Set https url to remote, otherwise set ssh url",
      default: false
    }
  })
  .example("npx $0", "Show upstream url")
  .example("npx $0 --set", "Set upstream with confirmation")
  .example("npx $0 --set -f", "Set upstream even if upstream already exists")
  .example("npx $0 --set --https", "Set https://...")
  .example("npx $0 --set --no-shallow", "For deep nested fork").argv;

main(argv)
  .then(flow(chalk.cyan, console.log))
  .catch(
    flow(
      error => error.message,
      chalk.red,
      console.error,
      () => process.exit(1)
    )
  );
