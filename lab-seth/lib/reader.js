'use strict';

const reader = module.exports = {};
const fs = require('fs');

const fileInfo = [];

//can only handle a certain number of files determined by how many readFile functions there are inside of readAll.
reader.readAll = (paths, callback) => {
  //write error checks here for all readFile functions
  console.log(paths[0]);

  fs.readFile(paths[0], 'utf8', (err, data) => {
    if (err) return callback(err);
    fileInfo.push(data.toString('utf-8', 0));
    return callback(null, fileInfo[0]);
  });
};
