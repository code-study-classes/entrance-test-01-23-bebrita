import getPath from './get-path.js';
import fs from 'fs';

const reader = (fPath) =>{ 
    const filePath = getPath(fPath);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    console.log(fileData);
    return fileData;
}

export default reader;