const execa = require('execa');
const path = require('path');
async function run() {
    await execa('rollup', ['-c'], { stdio: 'inherit' })
}
run().then(() => console.log('finished build'))