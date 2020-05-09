import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";

dotenv.config();

/**
 *
 * App Variable
 */

if (!process.env.PORT) {
    process.exit(1)
}

const PORT = parseInt(process.env.PORT, 10) || 7000;

const app = express();

/**
 *
 * App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 *
 * Server Activation
*/



const server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on port ${PORT}`);
});
