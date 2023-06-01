import dotenv from "dotenv"
import express from "express"
import "./db/connect.js"
import cors from "cors"
import bodyParser from "body-parser";
import router from "./router.js"
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use("/", router)

app.listen(9000, () => {
    console.log(`Listening to the port 9000`);
})