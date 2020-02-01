import cors, { CorsOptions } from 'cors';
import express from 'express';
import passport from 'passport';
import path from 'path';
import db from './models';
import routes from './routes';
import { gLStrategy } from './routes/auth/user';
import cookieParser from 'cookie-parser';
import { deSerializeUser, serializeUser } from './util/passport/UserSerializer';

export const APP_ROOT = path.resolve(__dirname);

const app = express();

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
app.set('port', 3000);
app.set('db', db);
app.use(routes);



export default app;
