import { client } from '../index.js';

export async function updateMovieById(data) {
    return await client.db("B33WD").collection("movies").insertMany(data);
}
export async function deleteMoviesbyId(id) {
    return await client
        .db("B33WD")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function getMoviesById(id) {
    return await client
        .db("B33WD")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies() { 
    return await client
        .db("B33WD")
        .collection("movies")
        .find({}).toArray();
}
//creating sign up user
export async function createUser(data) { 
    return await client
        .db("B33WD")
        .collection("users")
        .insertOne(data)
}
export async function getUsersByName(username) {
   const user = await client
        .db("B33WD")
        .collection("users")
        .findOne({ username: username });
        return user;
}

