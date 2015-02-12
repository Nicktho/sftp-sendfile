var sftp = require('node-sftp');
var path = require('path');
var fs = require('fs');

// Options:
// host: sftp server host
// username:
// password:
// directory: (optional)

module.exports.sendFile = function(opts, filepath, next) {
  var cnt = new sftp({
      host: opts.host,
      username: opts.username,
      password: opts.password,
      home: opts.directory || '/'
    }, function(err) {
      if (err) return next(err);
      var file = __dirname + opts.filepath;
      var filename = path.basename(opts.filepath);

      fs.readFile(file, function(err, data) {
        if (err) return next(err);
        cnt.writeFile(filename, data, null, function(err) {
          if (err) return next(err);
          next();
        })
      });
  });
};
