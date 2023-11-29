import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./Components/MovieList";
import UpdateDescriptionNavbar from "./Components/UpdateDescriptionNavbar";
import Movies from "./Components/Movies";
import AddMovie from "./Components/AddMovie";
import "./App.css"
import Search from "./Components/Search";



function App() {
    const [data, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);


    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get("http://localhost:8080/api/Movies")
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    };

    // const addMovie = async (newMovie) => {
    //     try {
    //         await axios.post("http://localhost:8080/api/Movies", newMovie);
    //         // setMovies([...data, response.data]);
    //     } catch (error) {
    //         console.error("Error", error);
    //     }
    // };
    const handleSearch = (query) => {
        console.log(query)
        var searched = data.filter((movie) => movie.name.includes(query));
        setMovies(searched);
      };

    const deleteMovie = async (movieName) => {
        try {
            console.log("Deleting movie:", movieName);
            await axios.delete(`http://localhost:8080/api/Movies/${movieName}`);
            console.log("Deleted");
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    const updateDescription = async (movieName, newDescription) => {
        try {
            console.log("Updating description for movie:", movieName);
            await axios.put(`http://localhost:8080/api/Movies/${movieName}`, { description: newDescription });
            console.log("Updated");
        } catch (error) {
            console.error("Error updating description:", error);
        }
    };

    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    };

    return (
        <>
        <Search handleSearch={handleSearch}/>
            <UpdateDescriptionNavbar onUpdateDescription={updateDescription} />
            <MovieList data={data} onDelete={deleteMovie} onUpdateDescription={updateDescription} />

            <button onClick={handleOpenModal}>Add Movie</button>
            <AddMovie show={showModal} handleClose={handleCloseModal}  />
        </>
    );
}

export default App;