const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Movies')
.then(
  () => {
    console.log("connected")
    }
).catch(err => {
  console.log(err)
})

  // ADD your Schema here!
const MoviesSchema=mongoose.Schema({
  image:String,
  name:String,
director:String,
genres:String,
hero:String,
description:String,
})
  // ADD the Model compiled from the above Schema
const Movies=mongoose.model("Movies",MoviesSchema)

  // ADD Functions to interact with the Schema

  const getMovies=async()=>{
return await Movies.find()
  }

const getMovieByName=async(name)=>{
  return await Movies.findOne({name:name})
}


  const addMovies = async(movie)=>{
    await Movies.create(movie)
  }


const deleteMovie=async(name)=>{
  return await Movies.deleteOne({name:name})
}



const updateMovie = async (name, newDescription) => {
  return await Movies.updateOne({ name: name }, { $set: { description: newDescription } })
}



// Don't forget to export your functions!
module.exports = {getMovies,addMovies,getMovieByName,deleteMovie,updateMovie};
