const parseArgs = () => {
    const argsString = Object.entries(process.argv)
        .filter(([_, val]) => val.startsWith('--'))
        .map(([key, val]) => `${val.substring(2)} is ${process.argv[parseInt(key) + 1]}`)
        .join(', ');
    console.log(argsString);
};

parseArgs();
