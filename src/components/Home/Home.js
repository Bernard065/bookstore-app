import React, {  useState, useEffect } from 'react'
//import { Outlet } from 'react-router-dom'
//import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header'
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Home.css'
import Search from '../Search/Search'


const Home = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
 
   

  useEffect(() => {
    axios.get('http://localhost:3000/books')
    .then(res => setBooks(res.data));
  }, []);
    //console.log(books)

  const addToCart = (book) => {
    setCart([...cart, book]);
  }


  return (
    <main>
        <Header books={books} />
        <h1 className='title text-center'>Available Books</h1>
        <Search books={books} setBooks={setBooks} addToCart={addToCart} />
        <Footer />
    </main>
  )
}

export default Home