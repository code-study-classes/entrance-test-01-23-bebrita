import getPath from "./get-path.js";
import fs from 'fs';
import readlineSync from 'readline-sync';

const filePath = getPath('data/regions.csv');
const newData = readlineSync.question('New region:');
fs.appendFileSync(filePath, `\n${newData}`, 'utf-8');
