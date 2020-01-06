const { spawnSync } = require('child_process')

describe('E2E', () => {
    it('--help', () => {
        const { status, output: [, , stderr] } = spawnSync('node', ['../index.js', '--help'], { encoding: 'utf8' })
        expect(stderr).toBe('')
        expect(status).toBe(0)
    })
    it('--set', () => {
        const { status, output: [, , stderr] } = spawnSync('node', ['../index.js', '--set'], { encoding: 'utf8' })
        expect(stderr).toBe('')
        expect(status).toBe(0)
    })
    it('--set -f', () => {
        const { status, output: [, , stderr] } = spawnSync('node', ['../index.js', '--set', '-f'], { encoding: 'utf8' })
        expect(stderr).toBe('')
        expect(status).toBe(0)
    })
    it('--set -f --https', () => {
        const { status, output: [, , stderr] } = spawnSync('node', ['../index.js', '--set', '-f', '--https'], { encoding: 'utf8' })
        expect(stderr).toBe('')
        expect(status).toBe(0)
    })
    it('--set -f --no-shallow', () => {
        const { status, output: [, , stderr] } = spawnSync('node', ['../index.js', '--set', '-f', '--no-shallow'], { encoding: 'utf8' })
        expect(stderr).toBe('')
        expect(status).toBe(0)
    })
})
