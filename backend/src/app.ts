import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import routes from "./routes";

const app: Express = express();
const VERSION = '/api/v1';
const PORT = 5000

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use("/api/v1", routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.get(`${VERSION}/health`, (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: `Backend server is running on port ${PORT}.`
    });
});

app.listen(PORT);