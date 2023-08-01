import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser"
import * as cors from "cors";
import { readFileSync } from "fs";
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(bodyParser());
app.use(cookieParser());

/*
Task 3: Asynchronous File Handling
Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
*/
app.get("/read", (req: express.Request<any, { input: number[] }>, res: express.Response, next: express.NextFunction) => {

    const fileContent = readFileSync('data.txt', 'utf-8');

    res.status(200).json({
        fileContent: fileContent
    })
})



/*
Task 2: Data Manipulation
Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/
app.post("/cal", (req: express.Request<any, { input: number[] }>, res: express.Response, next: express.NextFunction) => {

    const input: number[] = req.body.input;
    let inputSum = 0;
    input.forEach((val) => {
        inputSum += val;
    })

    res.status(200).json({
        output: inputSum
    })
})



/*
Task 1: Basic Node.js Server
Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.
*/
app.all("*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({
        message: "Hello world ...."
    })
})


const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => console.log("application is running on " + port));

