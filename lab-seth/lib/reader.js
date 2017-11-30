'use strict';

const reader = module.exports = {};
const fs = require('fs');

const fileInfo = [];

//can only handle a certain number of files determined by how many readFile functions there are inside of readAll.
reader.readAll = (paths, callback) => {

  fs.readFile(paths[0], 'utf8', (err, data) => {
    if (err) return callback(err);
    fileInfo.push(data.toString('utf-8'));

    fs.readFile(paths[1], 'utf8', (err, data) => {
      if (err) return callback(err);
      fileInfo.push(data.toString('utf-8'));

      fs.readFile(paths[2], 'utf8', (err, data) => {
        if (err) return callback(err);
        fileInfo.push(data.toString());
        callback(null, fileInfo);
      });
    });
  });
};
