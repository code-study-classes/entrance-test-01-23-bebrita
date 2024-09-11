import { fileURLToPath } from 'url';
import path from 'path';

const getPath = (fpath) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '..', fpath);
    return filePath;
};

export default getPath;