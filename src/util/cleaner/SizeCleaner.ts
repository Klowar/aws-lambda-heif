import fs from 'fs';

type WatchProp = {
    path: string,
    size: number
}

type CleanProp = {
    path: string,
    files: string[]
}

export function watchForClean({ path, size }: WatchProp) {
    fs.watch(path, (event, file) => {
        fs.readdir(path, (err, files) => {
            if (err) throw err;

            if (files.length > size) {
                cleanOldFiles({ path, files });
            }
        });
    })
}

export function cleanOldFiles({ path, files }: CleanProp) {
    for (const file of files) {
        fs.unlink(`${path}/${file}`, (err) => {
            if (err) throw err;
        });
    }
}
