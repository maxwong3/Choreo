import express, { type Express, type Request, type Response } from 'express';
import pool from './config/db';

const app: Express = express();
const VERSION = '/api/v1';
const PORT = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.get(`${VERSION}/health`, (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: `Backend server is running on port ${PORT}.`
    });
});

app.get(`${VERSION}/testdb`, async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT NOW();");

        res.status(200).json({
            status: "Database connected",
            time: result.rows[0].now
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: "Database connection failed."
        });
    }
});

app.listen(PORT);