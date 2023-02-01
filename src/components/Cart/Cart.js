import React from 'react'
import Navbar from '../Navbar/Navbar'

function Card(book){
    const addToCart = book.map(books => {
        return (
            <>
            <h1>{books.title}</h1>
            </>
        )
    })
    return(
        <>
        <Navbar />
        <div>{addToCart}</div>
        </>
    )
}


export default Card 