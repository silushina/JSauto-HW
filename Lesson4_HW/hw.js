const fs = require('fs-extra');

const dir = 'folder1';
const dir2 = 'folder2';
const dir3 = 'folder3';
const file = 'folder1/newfile.txt'

fs.ensureDirSync(dir);

fs.ensureFileSync(file);

fs.ensureDirSync(dir2);

fs.moveSync('folder1/newfile.txt', 'folder2/newfile.txt');

fs.ensureDirSync(dir3);

fs.copySync('folder2/newfile.txt', 'folder3/newfile.txt');

fs.removeSync('folder2/newfile.txt');

fs.removeSync('folder3/newfile.txt');

fs.removeSync('folder1');

fs.removeSync('folder2');

fs.removeSync('folder3');
