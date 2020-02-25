import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import SavedList from "./SavedList"

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log("here are the props111", movie);
  const {movieID} = useParams();
  console.log("movieID", movieID)
 
  useEffect(() => {
    const id = movieID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[setMovie]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    console.log('Add2Svd', props.addToSavedList)
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars, addToSavedList } = movie;
  console.log("Heres the Movie", movie);
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie={movie} saveMovie={saveMovie}/>
      </div>
    </div>
  );
}

export default Movie;
