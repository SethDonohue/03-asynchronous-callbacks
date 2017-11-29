'use strict';

const reader = module.exports = {};
const fs = require('fs');

//can only handle a certain number of files determined by how many readFile functions there are inside of readAll.

reader.readAll = (paths, callback) => {
  //paths is an array of filepaths ['/home/file1.txt', '/home/file2.txt', '/home/file3.txt',]
  //write error checks here for all readFile functions

  fs.readFile(paths[0], 'utf8', (err, data) => {
    if (err) throw err;
  })

  return undefined
}

fp.map = (paths, callback) => {

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array-like object');

  return Array.prototype.map.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  return Array.prototype.reduce.call(collection, callback, initialValue);
};

fp.filter = (callback, collection) => {

  if(typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  return Array.prototype.filter.call(collection, callback);
};

fp.slice = (begin, end, collection) => {

  if(!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  if(typeof begin !== 'number' || typeof end !== 'number')
    throw new TypeError('<begin> and <end> should be a number');


  return Array.prototype.slice.call(collection, begin, end);
};
