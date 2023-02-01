import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { config } from 'dotenv';
config();

import postRoutes from './routes/posts.js';

import Tip from "./models/postTip.js";

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));


const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

app.post("/tips", async (req, res) => {
    const newTip = new Tip({
        title: "test",
        description: "test",
        creator: "test",
        tags: ["test"],
        URL: "test",
    });
    const CreatedTip = await newTip.save();
    res.json(CreatedTip)
} )


mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.message));

console.log("test")
