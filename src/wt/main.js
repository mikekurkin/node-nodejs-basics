import { availableParallelism } from "node:os";
import { join } from "node:path";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
    const workerFile = "worker.js";
    const workerPath = join(import.meta.dirname, workerFile);
    const concurrentWorkers = availableParallelism();
    const inputs = Array(concurrentWorkers)
        .fill()
        .map((_, i) => i + 10);

    const outputs = Array(concurrentWorkers);
    const workers = inputs.map((input, i) => {
        return new Promise((resolve, _) => {
            const worker = new Worker(workerPath);
            worker.postMessage(input);
            worker.on("message", (output) => {
                outputs[i] = { status: "resolved", data: output };
                resolve();
            });
            worker.on("error", () => {
                outputs[i] = { status: "error", data: null };
                resolve();
            });
        });
    });
    Promise.all(workers).then(() => {
        console.log(outputs);
        process.exit(0);
    });
};

await performCalculations();
