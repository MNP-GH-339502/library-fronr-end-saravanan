import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get('https://localhost:7093/api/Categories');
        setCategories(response.data);
    };

    const addCategory = async () => {
        await axios.post('/api/categories', { name, description });
        fetchCategories(); // Refresh category list
    };

  return (
    <div>
    <h2>Categories</h2>
    <ul>
        {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
        ))}
    </ul>
    <h3>Add Category</h3>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
    <button onClick={addCategory}>Add Category</button>
</div>
  )
}

export default CategoryList