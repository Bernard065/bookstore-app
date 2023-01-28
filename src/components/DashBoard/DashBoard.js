import React, { useEffect, useState } from 'react'
import AddBook from '../AddBook/AddBook'
import axios from 'axios';
import './DashBoard.css'
import Navbar from '../Navbar/Navbar';

const DashBoard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/books')
        .then(res => setBooks(res.data));
    }, []);
    //console.log(books)

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/books/${id}`);
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
            alert("Book has been successfully deleted!");
        } catch (error) {
            console.error(error);
            alert("Delete failed. Please try again.");
        }
      };
    
    const loginBooksDisplay= books.map(book => {
        return (
            <div className="book" key={book.id}>
                <img src={book.url} alt={book.title} />
                <div className="book-info">
                    <h2>{book.title}</h2>
                    <h4>Author: {book.author}</h4>
                    <p>Publisher: {book.publisher}</p>
                    <p>Publish Date: {book.publish_date}</p>
                    <p>ISBN: {book.isbn}</p>
                    <p>Description: {book.description}</p>
                    <p>${book.price}</p>
                    <button onClick={() => handleDelete(book.id)}>delete</button>
                </div>
            </div>
    ) 
   })
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <h1>Admin DashBoard</h1>
        </div>
        <div><AddBook /></div>
        <div className='admin'>
            <h2 className='heading'>Books Available in Store</h2>
        </div>
        <div className='books-grid'>
            {loginBooksDisplay}
        </div>
    </div>
  )
}

export default DashBoard