import express from "express";
import mongoose, { connection } from "mongoose";
import Articles from "./dbArticles.js";

//app config

const app = express();

const port = process.env.PORT || 8082;

const connection_url =
  "mongodb+srv://admin:U7ZzD3PcCxllpw2t@cluster0.0g9ls.mongodb.net/seedsDatabase?retryWrites=true&w=majority";

//middlewares

// db config

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints

app.get("/", (req, res) => res.send("Hello world!"));

app.post("/seeds/articles", (req, res) => {
  const dbData = req.body;

  Articles.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/seeds/articles", (req, res) => {
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
