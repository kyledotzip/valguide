import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";

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

app.use(
    cors({
        origin: "*",
    })
);

app.post("/tips", async (req, res) => {
    const newTip = new Tip({
        title: req.body.title,
        description: req.body.description,
        creator: req.body.creator,
        tag: req.body.tag,
        url: req.body.url,
    });
    const CreatedTip = await newTip.save();
    res.json(CreatedTip)
} );

app.get('/tips', async (req, res) => {
    const tips = await Tip.find();

    res.json(tips);
})

app.get('/', (req, res) => {
    res.send("Hello");
});


mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.message));

