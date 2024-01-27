import { open } from "node:fs/promises";
import { join } from "node:path";
import { createGzip } from "node:zlib";

const compress = async () => {
    const fileName = "files/fileToCompress.txt";
    const destName = "files/archive.gz";

    const filePath = join(import.meta.dirname, fileName);
    const destPath = join(import.meta.dirname, destName);

    const gzip = createGzip();

    try {
        const fileStream = (await open(filePath, "r")).createReadStream();
        const destStream = (await open(destPath, "w")).createWriteStream();
        fileStream.pipe(gzip).pipe(destStream);
    } catch (err) {
        console.log(err);
    }
};

await compress();
