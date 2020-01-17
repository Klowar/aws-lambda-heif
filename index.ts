import routes from './src/routes';
import cors from 'cors';

const express = require('express');

var app = express();

app.use(cors());
app.use(routes);
app.listen(3000);
