import React, {  useState, useEffect } from 'react'
//import { Outlet } from 'react-router-dom'
//import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header'
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Home.css'
import Search from '../Search/Search'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  const [books, setBooks] = useState([]);

 
   

  useEffect(() => {
    axios.get('http://localhost:3000/books')
    .then(res => setBooks(res.data));
  }, []);
    //console.log(books)

  return (
    <main>
        <Navbar />
        <Header books={books} />
        <h2 className='title text-center'>Available Books</h2>
        <Search books={books} setBooks={setBooks} />
        <Footer />
    </main>
  )
}

export default Home