import app from './app';
import { watchForClean } from './util/cleaner/TimeCleaner';


const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    watchForClean({ path: './uploads/raw', size: 1600 });

    console.log("  Press CTRL-C to stop\n");
});

export default server;
