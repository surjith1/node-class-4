import express from 'express';
import { response } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from'dotenv';

//const express = require('express') //3rd pary imort
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express() //call express method


const port =4000;

  app.use(express.json());
  const MONGO_URL = process.env.MONGO_URL;
 
  async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect(); 
    console.log("Mongo Db is Connected ✌ 😊 👌.");
    return client;
  }
  
const client = await createConnection();
app.get('/', function (req, res) {
  res.send('Hello Surjith')
})
app.get('/movies', async function (req, res) {
  const movie = await client
    .db("B33WD")
    .collection("movies")
    .find({}).toArray();
  
    res.send(movie);
})
app.get('/movies/:id', async function (req, res) {
    const {id} = req.params;
    const movie = await client
    .db("B33WD")
    .collection("movies")
    .findOne({id:id});
    //const movie = movies.find(mv => mv.id ===id)

    movie? res.send(movie) : res.status(404).send({msg:"No such Movie found"});
})

app.post('/movies', async function (req, res) {
  const data = req.body;
  console.log(data);
  const result = await client.db("B33WD").collection("movies").insertMany(data);
  res.send(result);
})

app.listen(port,()=>console.log(`app Started ${port}`))