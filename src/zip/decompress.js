import { open } from "node:fs/promises";
import { join } from "node:path";
import { createUnzip } from "node:zlib";

const decompress = async () => {
    const srcName = "files/archive.gz";
    const fileName = "files/fileToCompress.txt";

    const srcPath = join(import.meta.dirname, srcName);
    const filePath = join(import.meta.dirname, fileName);

    const unzip = createUnzip();

    try {
        const srcStream = (await open(srcPath, "r")).createReadStream();
        const fileStream = (await open(filePath, "w")).createWriteStream();
        srcStream.pipe(unzip).pipe(fileStream);
    } catch (err) {
        console.log(err);
    }
};

await decompress();
