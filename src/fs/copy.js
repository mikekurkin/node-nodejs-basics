import { cp } from 'node:fs/promises';
import { join } from 'node:path';
import { FSError } from './helpers.js';

const copy = async () => {
    const source = 'files';
    const destination = 'files_copy';

    const sourcePath = join(import.meta.dirname, source);
    const destinationPath = join(import.meta.dirname, destination);

    try {
        await cp(sourcePath, destinationPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    } catch (err) {
        if (['ERR_FS_CP_EEXIST', 'ENOENT'].includes(err.code)) {
            throw new FSError();
        } else console.error(err);
    }
};

await copy();
