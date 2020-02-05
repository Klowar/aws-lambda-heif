import app from './app';
import { watchForClean } from './util/cleaner/SizeCleaner';
import { watchQueue } from './util/jobs/HeicCreateJob';

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    // Then upload images > 1600 - clean them
    watchForClean({ path: './uploads/raw', size: 1600 });
    // Run createHeic every minute
    watchQueue(60000);

    console.log("  Press CTRL-C to stop\n");
});

export default server;
