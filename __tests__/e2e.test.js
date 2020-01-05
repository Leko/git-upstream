const { spawnSync } = require('child_process')

describe('E2E', () => {
    it('--help', () => {
        const { status, output: [, stdout, stderr] } = spawnSync('node', ['../index.js', '--help'])
        expect(status).toBe(0)
        expect({ stdout, stderr }).toMatchSnapshot()
    })
    it('--set', () => {
        const { status, output: [, stdout, stderr] } = spawnSync('node', ['../index.js', '--set'])
        expect(status).toBe(0)
        expect({ stdout, stderr }).toMatchSnapshot()
    })
    it('--set -f', () => {
        const { status, output: [, stdout, stderr] } = spawnSync('node', ['../index.js', '--set', '-f'])
        expect(status).toBe(0)
        expect({ stdout, stderr }).toMatchSnapshot()
    })
    it('--set -f --https', () => {
        const { status, output: [, stdout, stderr] } = spawnSync('node', ['../index.js', '--set', '-f', '--https'])
        expect(status).toBe(0)
        expect({ stdout, stderr }).toMatchSnapshot()
    })
    it('--set -f --no-shallow', () => {
        const { status, output: [, stdout, stderr] } = spawnSync('node', ['../index.js', '--set', '-f', '--no-shallow'])
        expect(status).toBe(0)
        expect({ stdout, stderr }).toMatchSnapshot()
    })
})
