import React, { useState } from 'react';
import { gql, useMutation } from "@apollo/client";
import { GET_CLIENTS } from "./GetClient";
import '../App.css'


const ADD_CLIENT = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!)
        {addClient(
            name: $name,
            email: $email,
            phone: $phone
    )
    {
        name
        email
        phone
    }
}`

const AddClient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({
                query: GET_CLIENTS
            });

            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            })
        }
    });

    const addClientData = (e) => {
        e.preventDefault();
        console.log(name, email, phone);

        try {
            addClient(name, email, phone)
            alert('Data added successfully')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div >
            <h1>Add Client</h1>
            <form onSubmit={addClientData} className="form">
                <label>Name:</label>
                <input type="text" id='name' name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" id='email' name="name" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Phone:</label>
                <input type="phone" id='phone' name="name" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <button type='submit'>Add Client</button>
            </form>
        </div>
    );
}

export default AddClient;
