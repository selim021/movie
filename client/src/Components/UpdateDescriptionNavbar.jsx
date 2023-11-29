import React, { useState } from "react";

const UpdateDescriptionNavbar = ({ onUpdateDescription }) => {
    const [movieName, setMovieName] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdateDescription(movieName, newDescription)
        setMovieName("")
        setNewDescription("")
    };

    return (
        <>
        <div className="update-description-navbar"></div>
            <form onSubmit={handleSubmit}>
                <label m="movieName">Movie Name:</label>
                <input
                    type="text"
                    name="movieName"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    required
                />

                <label d="newDescription">New Description:</label>
                <textarea
                    name="newDescription"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Update Description</button>
            </form>
        </>
    );
};

export default UpdateDescriptionNavbar;