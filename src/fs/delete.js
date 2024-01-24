import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { FSError } from './helpers.js';

const remove = async () => {
    const folder = 'files';
    const filename = 'fileToRemove.txt';

    const filePath = join(import.meta.dirname, folder, filename);
    try {
        await rm(filePath);
    } catch(err) {
        if (err.code == 'ENOENT') {
            throw(new FSError());
        } else console.error(err);
    }
};

await remove();
