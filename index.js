import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from'dotenv';
import {moviesRouter} from './routes/movies.js';
import {userRouter} from './routes/users.js';
import cors from 'cors';

//const express = require('express') //3rd pary imort
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express() //call express method


app.use(cors());

const port =process.env.PORT;

  app.use(express.json()); //-->for parsing req and res  header and body object into json object
  const MONGO_URL = process.env.MONGO_URL;
 
  async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect(); 
    console.log("Mongo Db is Connected ✌ 😊 👌.");
    return client;
  }
  
export const client = await createConnection();

app.get('/', function (req, res) {
  res.send('Hello Surjith')
})
app.use('/movies', moviesRouter)
app.use('/users', userRouter)
app.get('/mobiles', async function (req, res) {
  const getMobiles = await client
        .db("B33WD")
        .collection("mobiles")
        .find({}).toArray();
  res.send(getMobiles)
})
app.post('/mobiles', async function (req, res) {
  const data = req.body;
  const result = await client.db("B33WD")
  .collection("mobiles")
  .insertMany(data)
 res.send(result)
})

app.listen(port,()=>console.log(`app Started ${port}`))


