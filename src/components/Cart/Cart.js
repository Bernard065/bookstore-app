import './Cart.css'
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';


const Cart = ({ cart }) => {
    // const [cart] = useState([]);
    const navigate = useNavigate();

    const displayCart = cart.map(book => {
        return (
            <div className='cart-item' key={book.id}>
                <img src={book.url} alt={book.title} />
                <div className='cart-item-info'>
                    <h2>{book.title}</h2>
                    <h4>Author: {book.author}</h4>
                    <p>Publisher: {book.publisher}</p>
                    <p>Publish Date: {book.publish_date}</p>
                    <p>ISBN: {book.isbn}</p>
                    <p>Description: {book.description}</p>
                    <p>Price: ${book.price}</p>
                    {/* <button onClick={() => removeFromCart(book)}>Remove from Cart</button> */}
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