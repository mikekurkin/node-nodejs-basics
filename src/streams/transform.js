import { Transform } from "node:stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            this.push(chunk.toString().split("").reverse().join(""));
            this.push("\n");
            callback();
        },
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
