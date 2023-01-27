import './Cart.css'
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';


const Cart = ({ cart }) => {
    // const [cart] = useState([]);
    const navigate = useNavigate();

   


return (
    <div className='cart-page'>
        <h1>My Cart</h1>
        <div className='cart-grid'>
        </div>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
)
}

export default Cart