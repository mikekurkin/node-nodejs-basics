import { fork } from "node:child_process";
import { join } from "node:path";

const spawnChildProcess = async (args) => {
    const scriptPath = join(import.meta.dirname, "files", "script.js");
    fork(scriptPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
