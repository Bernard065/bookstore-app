import React, {  useState, useEffect } from 'react'
//import { Outlet } from 'react-router-dom'
//import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header'
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Home.css'
import Search from '../Search/Search'
//import AddBook from '../AddBook/AddBook';

const Home = () => {
    const [books, setBooks] = useState([]);
    //const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/books')
        .then(res => setBooks(res.data));
    }, []);
    //console.log(books)
  return (
    <main>
        <Header books={books} />
        <h1 className='title text-center'>Available Books</h1>
        {/* <BooksList books={books} setBooks={setBooks} /> */}
        <Search books={books} />
        <Footer />
    </main>
  )
}

export default Home