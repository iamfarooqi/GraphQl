import React from 'react';
import '../App.css'

const AddClient = () => {
    return (
        <div >
            <h1>Add Client</h1>
            <form className="form">
                <label>Name:</label>
                <input type="text" name="name" />

                <label>Email:</label>
                <input type="email" name="name" />

                <label>Phone:</label>
                <input type="phone" name="name" />

                <button>Add Data</button>
            </form>
        </div>
    );
}

export default AddClient;
