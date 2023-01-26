import React, {  useState, useEffect } from 'react'
//import { Outlet } from 'react-router-dom'
//import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header'
import axios from 'axios';
import Footer from '../Footer/Footer';
import './Home.css'
import Search from '../Search/Search'
//import Cart from '../Cart/Cart';
//import AddBook from '../AddBook/AddBook';
//import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([]);
    //const [cart, setCart] = useState([]);
    //const [searchTerm, setSearchTerm] = useState("");
    //const navigate = useNavigate();

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
        <Search books={books} setBooks={setBooks} />
        {/* <Cart cart={cart} setCart={setCart} /> */}
        <Footer />
    </main>
  )
}

export default Home