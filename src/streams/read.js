import { open } from 'node:fs/promises';
import { join } from 'node:path';

const read = async () => {
    const filename = 'files/fileToRead.txt';

    const filePath = join(import.meta.dirname, filename);
    const file = await open(filePath, 'r');
    const stream = file.createReadStream();

    stream.pipe(process.stdout);
};

await read();
