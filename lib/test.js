
const spawn = require('child_process').spawn;
const ps = spawn('watch', ['ps', 'ax'], {
  uid : 1000,
  gid : 1000
});

const os = require('os');
console.log(os.userInfo());

// ps.on('close', (code) => {
//   console.log('exited');
// });
