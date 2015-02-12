var sftp = require('./index');

var config = {
  host: 'localhost:22',
  username: 'admin',
  password: 'admin',
  directory: '/incoming'
};

sftp.sendFile(config, '/helloworld.txt', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Success!');
  }
});
