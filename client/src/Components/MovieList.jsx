import React from "react";
import Movies from "./Movies";

const MovieList = ({ data, onDelete, onUpdateDescription }) => {
    return (
        <>
            {data.map((ele, index) => (
                <Movies key={index} ele={ele} onDelete={onDelete} onUpdateDescription={onUpdateDescription} />
            ))}
        </>
    );
};

export default MovieList;














