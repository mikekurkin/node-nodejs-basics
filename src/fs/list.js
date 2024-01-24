import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { FSError } from './helpers.js';

const list = async () => {
    const folder = 'files';

    const folderPath = join(import.meta.dirname, folder);
    try {
        const filesList = await readdir(folderPath);
        console.log(filesList);
    } catch(err) {
        if (err.code == 'ENOENT') {
            throw(new FSError());
        } else console.error(err);
    }
};

await list();
