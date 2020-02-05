import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import passport from 'passport';
import path from 'path';
import { TedisPool } from 'tedis';
import db from './models';
import routes from './routes';
import { gLStrategy } from './routes/auth/user';
import { deSerializeUser, serializeUser } from './util/passport/UserSerializer';

export const APP_ROOT = path.resolve(__dirname);

const app = express();
export const tedispool = new TedisPool({
    host: "127.0.0.1",
    port: 6379
});

const corsOptions: CorsOptions = {
    origin: "*"
}

passport.use(gLStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deSerializeUser);

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('uploads/heic'));
app.use(express.static('view'));
app.set('port', 3000);
app.set('db', db);
app.use(routes);



export default app;
