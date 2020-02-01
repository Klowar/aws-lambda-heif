import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://127.0.0.1:27017/dynowalls', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((mongo) => {
        console.log("Connection established");
    })
    .catch((err) => {
        throw err;
    });
mongoose.Promise = global.Promise;


export default db;
