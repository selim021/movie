import React from "react";

const Movies = ({ ele, onDelete, onUpdateDescription }) => {
    return (
        
        <>
         <div className="movie">
            <img className="movie-image"  src={ele.image} alt="" />
            <h1>Name: {ele.name}</h1>
            <h2>Director: {ele.director}</h2>
            <h3>Genres: {ele.genres}</h3>
            <h3>Hero: {ele.hero}</h3>
            <p>Description: {ele.description}</p>
            <button onClick={() => onDelete(ele.name)}>Delete</button>
        
        </div>
        </>
    );
};

export default Movies;