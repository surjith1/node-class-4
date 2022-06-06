import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from'dotenv';
import {moviesRouter} from './routes/movies.js'

//const express = require('express') //3rd pary imort
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express() //call express method


const port =process.env.PORT;

  app.use(express.json());
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

app.listen(port,()=>console.log(`app Started ${port}`))