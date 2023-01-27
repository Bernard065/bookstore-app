import axios from 'axios';

export const setBooks = (books) => {
return {
type: 'SET_BOOKS',
payload: books
}
}

export const deleteBook = (id) => {
return {
type: 'DELETE_BOOK',
payload: id
}
}

export const fetchBooks = () => {
return async (dispatch) => {
try {
const res = await axios.get('http://localhost:3000/books');
dispatch(setBooks(res.data));
} catch (err) {
console.error(err);
}
}
}

export const removeBook = (id) => {
return async (dispatch) => {
try {
await axios.delete(`http://localhost:3000/books/${id}`);
dispatch(deleteBook(id));
} catch (err) {
console.error(err);
}
}
}