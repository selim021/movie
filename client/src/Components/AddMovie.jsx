import React, { useState } from "react";
import axios from "axios";

const AddMovie = ({ show, handleClose,  }) => {
    const [newMovie, setNewMovie] = useState({
        name: "",
        director: "",
        genres: "",
        hero: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleAdd = async () => {
        try {
            console.log(newMovie)
            const response = await axios.post("http://localhost:8080/api/Movies", newMovie)
            // handleAddMovie(response.data)
            handleClose()
        } catch (error) {
            console.error("Error ", error);
        }
    }

    return (
        <div className={`modal ${show ? "show" : ""}`}>
           <div className="modal-content">
                <span className="close" onClick={handleClose}>
                    &times;
                </span>
                <h2>Add Movie</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" value={newMovie.name} onChange={handleChange} />
                    <label>Director:</label>
                    <input type="text" name="director" value={newMovie.director} onChange={handleChange} />
                    <label>Genres:</label>
                    <input type="text" name="genres" value={newMovie.genres} onChange={handleChange} />
                    <label>Hero:</label>
                    <input type="text" name="hero" value={newMovie.hero} onChange={handleChange} />
                    <label>Description:</label>
                    <input type="text" name="description" value={newMovie.description} onChange={handleChange} />
                    <label>Image URL:</label>
                    <input type="text" name="image" value={newMovie.image} onChange={handleChange} />
                    <button type="button" onClick={handleAdd}>
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;
