const express = require("express");
const router = express.Router();
const studentModel = require('../models/students');

//getAllStudents
router.get('/',async(request, response) => {
    try{
    const movies = await movieModel.find();
    response.status(201).json(movies);
    }
    catch(error){
        //console.log(error);
        response.status(500).json({message:error.message});
    }
})

//addStudent
router.post('/',async(request,response) => {
    const newMovie = new movieModel ({
        movieName: request.body.movieName,
        genre: request.body.genre,
        language: request.body.language,
        releasedYear : request.body.releasedYear,
        rating : request.body.rating
    })
    try{
        const movie = await newMovie.save();
        response.status(201).json(movie);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
})

router.patch('/:id',getMovie,async(request,response)=>{
  //res.send(`Updating Student details With Id ${req.params.id}`)
  if(request.body.movieName != null){
    response.student.name = request.body.movieName;
  }
  if(request.body.genre != null){
    response.student.genre = request.body.genre;
  }
  try{
    const updatedStudent = await response.movie.save();
    response.status(201).json(updatedStudent);
  }
  catch(error){
    response.status(400).json({message:error.message});
  }
})

router.delete('/:id',async(request,response)=>{
  //res.send(`Deleting Student details With Id ${req.params.id}`)
  try{
    await response.movie.deleteOne();
    response.json({message: 'Deleted user ${response.student.name}'})
  }
  catch(error){
    response.json({message:error.message})
  }
})

router.get('/:id',getMovie, (request,response)=>{
  response.status(200).json(response.movie);
})

async function getMovie(request, response, next){
    let movie
    try{
        student = await Model.findById(request.params.id)
        if(movie == null){
            return response.status(404).json({message:"Cannot find user with id ${request.params.id}"})
        }
        response.student = movie;
        next()
    }
    catch(error){
        return response.status(500).json({message:error.message})
    }
}

module.exports=router;