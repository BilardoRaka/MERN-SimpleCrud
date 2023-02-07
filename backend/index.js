import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import userRoute from "./routes/userRoute.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);

const startServer = () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(
            process.env.PORT || 8080, () => console.log('Server berjalan.')
        )
    } catch (error) {
        console.log(error);
    }
}

startServer();
