const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const db=require("../server/database/mongodb/index.js");
const { getMovies,addMovies,getMovieByName,deleteMovie,updateMovie } = require("../server/database/mongodb/index.js");



app.use(express.json());
app.use(cors());

app.get("/api/Movies", async(req, res) => {
try{
  const allMovies= await getMovies()
  console.log(allMovies)
  res.status(200).json(allMovies)
}
catch (error){
  console.error(error)
  res.status(500).json("error")
}
});


app.get("/api/Movies/:name", async (req, res) => {
  const movieName = req.params.name;
  try {
    const movie = await getMovieByName(movieName)

   if (movie) {
      res.status(200).json(movie)
    } else {
      res.status(404).json("Movie not found")
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("error");
  }
})


app.post ("/api/Movies",(req,res)=>{
  
  const movie=req.body
  addMovies(movie).then((result)=>{
res.send(result)

  }).catch((err)=>{
   res.send("error",err)
  })
  
})



app.delete("/api/Movies/:name", async (req, res) => {
  const movieName = req.params.name
  try {
 await deleteMovie(movieName)

 res.status(200).json("deleted")
   
  } catch (error) {
    console.error(error)
    res.status(500).json("error")
  }
});


app.put("/api/Movies/:name", async (req, res) => {
  const movieName = req.params.name
  const newDescription = req.body.description

  try {
    await updateMovie(movieName, newDescription)
    res.status(200).json("updated")
  } catch (error) {
    console.error(error);
    res.status(500).json("error")
  }
})


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
