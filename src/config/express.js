import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import router from "../routes";

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

app.use('/api', router);

export default app;

