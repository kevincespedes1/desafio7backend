import multer from 'multer';  
import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './src/public/img')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


export default __dirname;
export const uploader = multer({storage})


// 21fb3a506202b74a24d240946ec8fb19f901949c