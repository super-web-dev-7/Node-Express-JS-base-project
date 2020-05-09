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

const app = express();

/**
 *
 * App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

export default app;

