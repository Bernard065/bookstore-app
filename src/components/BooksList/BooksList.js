//import axios from 'axios';
//import React, { useEffect, useState } from 'react'

const BooksList = ({ books }) => {
    const displayBookList = books.map(book => {
        return <div key={book.id}>
            <img src={book.url} alt={book.title} />
            <div className="book-info">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.publisher}</p>
                <p>{book.publish_date}</p>
                <p>{books.description}</p>
                <p>{books.price}</p>
            </div>
        </div>
    })
    
  return (
    <div>
        <h1>My books</h1>
        {displayBookList}
    </div>
  )
}

export default BooksList