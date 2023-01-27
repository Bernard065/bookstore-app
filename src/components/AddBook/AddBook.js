import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddBook.css'

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        publish_date: '',
        isbn: '',
        description: '',
        price: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3000/books', formData)
            .then(res => {
                console.log(res.data);
                alert('Book added successfully')
                setFormData({
                    title: '',
                    author: '',
                    publisher: '',
                    publish_date: '',
                    isbn: '',
                    description: '',
                    price: ''
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to='/'><button>Back to Home</button></Link>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <input type="text" name="url" placeholder="url" value={formData.url} onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
            <input type="text" name="publisher" placeholder="Publisher" value={formData.publisher} onChange={handleChange} required />
            <input type="text" name="publish_date" placeholder="Publish Date" value={formData.publish_date} onChange={handleChange} required />
            <input type="text" name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
