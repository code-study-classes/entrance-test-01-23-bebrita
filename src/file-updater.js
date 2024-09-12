import getPath from "./get-path.js";
import fs from 'fs';
import readlineSync from 'readline-sync';
import reader from "./file-reader.js";

const updater = (fPath, pattern) => {
    const filePath = getPath(fPath);
    // console.log(oldDate);
    fs.appendFileSync(filePath, pattern, 'utf-8');
    return true; 
}

//`\n${id}|${newData}`