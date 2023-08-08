const cp = require('child_process');


// cp.execSync('calc');

// cp.execSync('start chrome www.scaler.com');

console.log('output ' + cp.execSync('node demo.js'));