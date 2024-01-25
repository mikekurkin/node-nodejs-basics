import { open } from 'node:fs/promises';
import { join } from 'node:path';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const filename = 'files/fileToCalculateHashFor.txt';

    const hash = createHash('sha256');

    const filePath = join(import.meta.dirname, filename);
    const file = await open(filePath, 'r');
    const stream = file.createReadStream();

    stream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
