import { access } from 'node:fs/promises';

export async function fileExists(filePath) {
    return access(filePath)
        .then(() => true)
        .catch(() => false);
}

export class FSError extends Error {
    constructor(message = 'FS operation failed') {
      super(message);
      this.name = 'FSError';
    }
  }
