import express from "express";
import mongoose from "mongoose";
import Articles from "./dbArticles.js";
import cors from "cors";
//app config

const app = express();

const port = process.env.PORT || 8082;

const connection_url =
  "mongodb+srv://admin:U7ZzD3PcCxllpw2t@cluster0.0g9ls.mongodb.net/seedsDatabase?retryWrites=true&w=majority";

//middlewares

app.use(express.json());
app.use(cors());

// db config

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints

app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/seeds/article", (req, res) => {
  const dbArticle = req.body;

  Articles.create(dbArticle, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/seeds/article", (req, res) => {
  Articles.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Listener

app.listen(port, () => console.log(`Server is running on port ${port}`));

// mongo db password U7ZzD3PcCxllpw2t
