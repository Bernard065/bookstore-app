import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
const navigate = useNavigate();

const removeBookFromCart = (book) => {
setCart(cart.filter(b => b.id !== book.id))
}

const displayCart = cart.map(book => {
    return (
        <div className="book" key={book.id}>
            <img src={book.url} alt={book.title} />
            <div className="book-info">
                <h2>{book.title}</h2>
                <h4>Author: {book.author}</h4>
                <p>Publisher: {book.publisher}</p>
                <p>Publish Date: {book.publish_date}</p>
                <p>ISBN: {book.isbn}</p>
                <p>Description: {book.description}</p>
                <p>${book.price}</p>
                <button onClick={() => removeBookFromCart(book)}>Remove from Cart</button>
            </div>
        </div>
    )
})
return (
    <div className='cart-page'>
        <h1>My Cart</h1>
        <div className='cart-grid'>
            {displayCart}
        </div>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
)
}

export default Cart