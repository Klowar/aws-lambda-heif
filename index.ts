import routes from './src/routes';
import cors from 'cors';
import path from 'path';

const express = require('express');
export const APP_ROOT = path.resolve(__dirname);

var app = express();

app.use(cors());
app.use(routes);
app.listen(4000);
