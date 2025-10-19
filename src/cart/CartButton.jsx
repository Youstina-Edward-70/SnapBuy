import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const CartButton = ({ product, className }) => {
    const { toggleCart } = useContext(CartContext);

    const inCart = useContext(CartContext).cartProducts.some(p => p.id === product.id);

    return (
        <button
            className={`text-center rounded transition duration-500 ${className}`}
            onClick={() => toggleCart(product)}
        >
            {inCart? 'Remove' : 'Add to Cart'}
        </button>
    );
};

export default CartButton;
