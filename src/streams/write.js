import { open } from 'node:fs/promises';
import { join } from 'node:path';

const write = async () => {
    const filename = 'files/fileToWrite.txt';

    const filePath = join(import.meta.dirname, filename);
    const file = await open(filePath, 'w');
    const stream = file.createWriteStream();

    process.stdin.pipe(stream);
};

await write();
