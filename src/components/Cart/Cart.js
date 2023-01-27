import './Cart.css'
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';

const Cart = () => {
    //const [cart, setCart] = useState([]);
    const navigate = useNavigate();



return (
    <div className='cart-page'>
        <h1>My Cart</h1>
        <div className='cart-grid'>
            {/* {displayCart} */}
        </div>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
)
}

export default Cart