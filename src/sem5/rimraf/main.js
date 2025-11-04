const fs = require('fs');
const rimraf = require('rimraf');

const dir = './temp';
const file = `${dir}/Seminarul6.txt`;

fs.mkdirSync(dir);
fs.writeFileSync(file, '');
rimraf.sync(dir);