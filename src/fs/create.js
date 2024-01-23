import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const create = async () => {
    const folder = 'files';
    const filename = 'fresh.txt';
    const content = 'I am fresh and young';

    const filePath = join(import.meta.dirname, folder, filename);
    try {
        await writeFile(filePath, content, { flag: 'wx+' });
    } catch(err) {
        if (err.code == 'EEXIST') {
            throw(new Error('FS operation failed'));
        } else console.error(err);
    }
};

await create();
