//import axios from 'axios';
//import React, { useEffect, useState } from 'react'
//import BookDetails from '../BookDetails/BookDetails'
//import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './BooksList.css'

const BooksList = ({ books, addToCart }) => {
     const navigate = useNavigate();

    const displayBookList = books.map(book => {
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
                    <button onClick={() => {
                        addToCart(book);
                        navigate('/cart');
                    }}>Add to cart</button>
                </div>
            </div>
        )  
    })
    
  return (
    <div className='books-grid'>
        {displayBookList}
    </div>
  )
}

export default BooksList