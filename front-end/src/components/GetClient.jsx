import React from 'react';
import { gql, useQuery } from "@apollo/client";

// This Should be on different folder with the name of Mutation
export const GET_CLIENTS = gql`
  query getClients {
    clients {
        id
        name
        email
        phone
    }
  }
`
const GetClient = () => {
    const { data, error, loading } = useQuery(GET_CLIENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>error</p>
    console.log("data", data);
    return (
        <div>
            {!loading && !error && <h2>Clients</h2>}

            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>ID</th>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}>Email</th>
                        <th style={{ border: '1px solid black' }}>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {data.clients.map((user) => (
                        <tr key={user.id}>
                            {console.log(user)}
                            <td style={{ border: '1px solid black' }}>{user.id}</td>
                            <td style={{ border: '1px solid black' }}>{user.name}</td>
                            <td style={{ border: '1px solid black' }}>{user.email}</td>
                            <td style={{ border: '1px solid black' }}>{user.phone}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default GetClient;
