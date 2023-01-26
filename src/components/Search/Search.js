import React, {useState} from 'react'
import BooksList from '../BooksList/BooksList';
import './Search.css'

const Search = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
});
  return (
    <div className='search-form'>
      <input className='search-input' type='text' placeholder='Search by title or author' value={searchTerm} onChange={handleSearch} />
      <BooksList books={filteredBooks} />
    </div>
  )
}

export default Search