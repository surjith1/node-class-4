import express  from 'express';
import {client} from '../index.js';
import { getAllMovies, getMoviesById, deleteMoviesbyId, updateMovieById } from './helper.js';

const router = express.Router();

router.get('/', async function (req, res) {
    const movie = await getAllMovies();
    
      res.send(movie);
  })
  router.get('/:id', async function (req, res) {
      const {id} = req.params;
      const movie = await getMoviesById(id);
      //const movie = movies.find(mv => mv.id ===id)
  
      movie? res.send(movie) : res.status(404).send({msg:"No such Movie found"});
  })
  
  router.delete('/:id', async function (req, res) {
    const {id} = req.params;
    const movie = await deleteMoviesbyId(id);
    //const movie = movies.find(mv => mv.id ===id)
  
    movie.deletedCount>0? res.send(movie) : res.status(404).send({msg:"No such Movie found"});
  })
  
  router.post('/', async function (req, res) {
    const data = req.body;
    console.log(data);
    const result = await updateMovieById(data);
    res.send(result);
  })
  router.put('/:id', async function (req, res) {
    const data = req.body;
    const {id} = req.params;
    console.log(data);
    const result = await client.db("B33WD").collection("movies").updateOne({id:id},{$set:data});
    res.send(result);
  })

  export const moviesRouter = router;


