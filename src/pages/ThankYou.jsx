import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../components/CartProvider'

const ThankYou = () => {
    const { setCartProducts } = useContext(CartContext);

    useEffect(() => {
        localStorage.removeItem('cart');

        if (setCartProducts)
            setCartProducts([]);
    }, []);

    return (
        <div className="min-h-[55vh] flex flex-col items-center justify-center text-center p-6 bg-gray-50 dark:bg-gray-900 transition duration-500">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md transition duration-500">
                Your order has been placed successfully.
            </p>

            <Link
                to="/"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default ThankYou;
