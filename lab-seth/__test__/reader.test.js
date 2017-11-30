'use strict';

const reader = require('../lib/reader.js');

const paths = [`${__dirname}/../assets/data1.txt`, `${__dirname}/../assets/data2.txt`, `${__dirname}/../assets/data3.txt`];

describe('reader.readAll', () => {

  test('fs.readFile should return a callback with the result being the data of the file read', (done) => {
    reader.readAll(paths, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(`animals cats dogs dinosaurs
`);
      done();
    });
  });
});
