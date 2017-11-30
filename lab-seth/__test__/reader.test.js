'use strict';

const reader = require('../lib/reader.js');

const paths = [`${__dirname}/../assets/data1.txt`, `${__dirname}/../assets/data2.txt`, `${__dirname}/../assets/data3.txt`];

const badPaths = [`${__dirname}/../sets/data1.txt`, `${__dirname}/assets/data1.txt`, `${__dirname}/../failure/data1.txt`];

const dataCheck = ['birds\n','animals\n','spiders\n'];

describe('reader.readAll', () => {

  test('reader.readAll should return a callback with the result being the data of the file read', (done) => {
    reader.readAll(paths, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(dataCheck);
      done();
    });
  });
  test('reader.ReadAll should return an error when given an invlaid filepath', (done) => {
    reader.readAll(badPaths, (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });
});
