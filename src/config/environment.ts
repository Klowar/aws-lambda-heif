const dotenv = require('dotenv');

const config = dotenv.config();

export const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = config.parsed;
