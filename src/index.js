import mongoose from 'mongoose';
import app from './config/express'
import config from './config/config';
import mongoOption from './config/mongo';

if (!config.port) {
    process.exit(1)
}

const PORT = parseInt(config.port, 10) || 7000;

/**
 *Connect with MongoDB
 */
mongoose.Promise = Promise;
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, mongoOption);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

/**
 *
 * Server Activation
*/

const server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on port ${PORT}`);
});
