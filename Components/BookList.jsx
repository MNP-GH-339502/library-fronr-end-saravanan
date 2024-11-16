import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [publicationYear, setPublicationYear] = useState('');

    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchBooks();
        fetchAuthors();
        fetchCategories();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('https://localhost:7093/api/Books');
        setBooks(response.data);
    };

    const fetchAuthors = async () => {
        const response = await axios.get('https://localhost:7093/api/Auth');
        setAuthors(response.data);
    };

    const fetchCategories = async () => {
        const response = await axios.get('https://localhost:7093/api/Categories');
        setCategories(response.data);
    };

    const addBook = async () => {
        await axios.post('/api/books', { title, authorId, categoryId, publicationYear });
        fetchBooks(); // Refresh book list
    };
  return (
    <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title} by {book.author.name} in category {book.category.name}</li>
                ))}
            </ul>
            <h3>Add Book</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                <option value="">Select Author</option>
                {authors.map((author) => (
                    <option key={author.id} value={author.id}>{author.name}</option>
                ))}
            </select>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input type="number" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} placeholder="Publication Year" />
            <button onClick={addBook}>Add Book</button>
        </div>
  )
}

export default BookList