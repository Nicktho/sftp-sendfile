var sftp = require('node-sftp');
var path = require('path');
var fs = require('fs');

// Options:
// host: sftp server host
// username:
// password:

module.exports.sendFile = function(opts, filepath, next) {
  var cnt = new sftp({host: opts.host, username: opts.username, password: opts.password}, function(err) {
    if (err) return next(err);
    var file = __dirname + opts.filepath;
    var filename = path.basename(opts.filepath);

    cnt.writeFile(filename, fs.readFileSync(file), null, function(err) {
      if (err) return next(err);
      next();
    })
  });
};
