import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import BooksList from './components/BooksList/BooksList';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='book' element={<BooksList />} />
      <Route path='/book/:id' element={<BookDetails />} />
    </Routes>
  );
}

export default App;
