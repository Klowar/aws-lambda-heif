import routes from './routes';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import { gLStrategy } from './routes/auth/user';
import express from 'express';

export const APP_ROOT = path.resolve(__dirname);

const app = express();

passport.use(gLStrategy);

app.use(cors());
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
app.set('port', 4000);


export default app;
