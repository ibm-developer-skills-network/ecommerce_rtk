import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';// Action to add produc

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));// Add product to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
        <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)} // Disable if already in cart
            >
                {cartItems.some(item => item.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>
        </li>
))}
      </ul>
    </div>
  );
};

export default ProductList;
