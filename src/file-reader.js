import getPath from './get-path.js';
import fs from 'fs';

const filePath = getPath('data/regions.csv');
const fileData = fs.readFileSync(filePath, 'utf-8');
console.log(fileData);