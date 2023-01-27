//import axios from 'axios';
//import React, { useEffect, useState } from 'react'
//import BookDetails from '../BookDetails/BookDetails'
import './BooksList.css'

const BooksList = ({ books }) => {
    function handleCart(e){
        e.preventDefault();
        books.forEach(data => console.log(data.title))
    }
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
                    <form onSubmit={handleCart}>
                        <button>Add to cart</button>
                    </form>
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