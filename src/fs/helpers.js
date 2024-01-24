import { access } from 'node:fs/promises';

export async function fileExists(filePath) {
    return access(filePath)
        .then(() => true)
        .catch(() => false);
}
