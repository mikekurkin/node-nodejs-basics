const parseEnv = () => {
    const prefix = 'RSS_';

    const varsString = Object.entries(process.env)
        .filter(([key, _]) => key.startsWith(prefix))
        .map((e) => e.join('='))
        .join('; ');
    console.log(varsString);
}

parseEnv();
