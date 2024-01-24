import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { FSError } from './helpers.js';

const read = async () => {
    const folder = 'files';
    const filename = 'fileToRead.txt'

    const filePath = join(import.meta.dirname, folder, filename);
    try {
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch(err) {
        if (err.code == 'ENOENT') {
            throw new FSError();
        } else console.error(err);
    }
};

await read();
