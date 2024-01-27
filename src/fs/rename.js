import { rename as rn } from 'node:fs/promises';
import { join } from 'node:path';
import { FSError, fileExists } from './helpers.js';

const rename = async () => {
    const folder = 'files'
    const oldFilename = 'wrongFilename.txt';
    const newFilename = 'properFilename.md';

    const oldPath = join(import.meta.dirname, folder, oldFilename);
    const newPath = join(import.meta.dirname, folder, newFilename);

    try {
        const [oldFileExists, newFileExists] = await Promise.all([fileExists(oldPath), fileExists(newPath)]);
        if (oldFileExists && !newFileExists) {
            await rn(oldPath, newPath);
        } else throw new FSError();
    } catch(err) {
        console.error(err);
    }

};

await rename();
