import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync';

const newRegion = readlineSync.question('New region:').toLowerCase().trim();
const id = getId('data/regions.csv');

updater('data/regions.csv', `\n${id}|${newData}`);