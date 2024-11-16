import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        const response = await axios.get('https://localhost:7093/api/Auth');
        setAuthors(response.data);
    };

    const addAuthor = async () => {
        await axios.post('/api/authors', { name, bio });
        fetchAuthors(); 
    };
  return (
    <div>
            <h2>Authors</h2>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
            <h3>Add Author</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
            <button onClick={addAuthor}>Add Author</button>
        </div>
  )
}

export default AuthorList