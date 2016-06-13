// Shameless copied from react-bootstrap

import 'colors';
import { exec } from 'child-process-promise';
import { StringDecoder } from 'string_decoder';

const SIGINT = 'SIGINT';
const decoder = new StringDecoder('utf8');

let processMap = {};

function output(prefix, message) {
  let formattedMessage = decoder.write(message)
    .trim()
    .split('\n')
    .reduce((acc, line) => `${acc}${ acc !== '' ? '\n' : '' }${prefix} ${line}`,
      '');

  console.log(formattedMessage);
}

function listen({
  stdout, stderr
}, name) {
  stdout.on('data', data => output(`[${name}] `.grey, data));
  stderr.on('data', data => output(`[${name}] `.grey, data));
}

function shutdown() {
  for (let key in processMap) {
    processMap[key].kill(SIGINT);
  }
}

function catchExec(name, err) {
  if (err.killed) {
    console.log('Shutdown: '.cyan + name.green);
    shutdown();
    return false;
  }

  console.log(`${name} -- Failed`.red);
  console.log(err.toString()
    .red);
  return true;
}

function runCmd(name, cmd, options) {
  exec(cmd, options)
    .progress(childProcess => {
      listen(childProcess, name);
      processMap[name] = childProcess;
      return;
    })
    .then(() => console.log('Shutdown: '.cyan + name.green))
    .catch(err => {
      if (catchExec(name, err)) {
        // Restart if not explicitly shutdown
        runCmd(name, cmd, options);
      }
    });
}

console.log('Starting docs in Development mode'.cyan);

process.on(SIGINT, shutdown);

runCmd('webpack-dev-server',
  `nodemon --watch webpack.config.js --exec webpack-dev-server -- --color --debug`
);

runCmd('docs-server', 'nodemon --watch src --exec babel-node server.js');

