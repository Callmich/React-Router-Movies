import React from 'react';
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      
      <span className="saved-movie">
        {console.log("v import movie",movie)}
        <NavLink exact to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      </span>
    ))}
    <Link exact to="/"className="home-button">Home</Link>
  </div>
);

export default SavedList;
