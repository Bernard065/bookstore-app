import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import BooksList from './components/BooksList/BooksList';
import Contact from './components/Contact/Contact';
import AddBook from './components/AddBook/AddBook';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/book' element={<BooksList />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/add-book' element={<AddBook />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
