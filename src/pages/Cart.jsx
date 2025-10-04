import React, { useContext } from 'react'
import { CartContext } from '../components/CartProvider';
import { useDarkMode } from "../components/DarkModeContext";
import CartItem from '../components/CartItem';
import TotalPrice from '../components/TotalPrice';
import { Link } from 'react-router';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Swal from 'sweetalert2';

const Cart = () => {
    const { darkMode } = useDarkMode();
    const { cartProducts, setCartProducts } = useContext(CartContext);

    // Clear the cart
    const handleClearCart = async () => {
        if (cartProducts.length === 0) return;

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "All items will be removed from your cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Clear All",
            cancelButtonText: "Cancel",
            background: darkMode ? "#1f2937" : "#fff",
            color: darkMode ? "#f3f4f6" : "#111827",
        });

        if (result.isConfirmed) {
            setCartProducts([]);
            localStorage.removeItem("cart");

            Swal.fire({
                title: "Cart Cleared!",
                text: "All products have been removed.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
                background: darkMode ? "#1f2937" : "#fff",
                color: darkMode ? "#f3f4f6" : "#111827",
            });
        }
    };

    return (
        <div className="min-h-[55vh] py-10 px-6 duration-500 dark:bg-gray-800 dark:text-white bg-white text-gray-900 transition-colors">
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold">Your Cart</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors">
                    Review the items in your cart.
                </p>
            </div>
            <div className="mx-auto max-w-4xl">
                {cartProducts.length > 0 ? (
                    <>
                        <div className="flex justify-between items-center mb-4 ms-5">
                            <h2 className="text-2xl font-bold">Cart Items</h2>
                            <button
                                onClick={handleClearCart}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                            >
                                Clear Cart
                            </button>
                        </div>
                        <div className="mt-6">
                            <ul className="space-y-4">
                                <CartItem />
                            </ul>

                            <TotalPrice />

                            <div className="mt-6 text-center">
                                <Link to={'/checkout'} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </>
                )
                    : <div className="border rounded-lg shadow p-6 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 transition duration-500">
                        <p className="text-center text-gray-600 dark:text-gray-400 transition-colors">
                            Your cart is currently empty.
                        </p>
                        <Link to="/products" className="mt-4 inline-block text-blue-600 dark:text-blue-400 transition duration-500 hover:underline flex gap-2 item-center">
                            <ArrowCircleLeftIcon /> Browse Products
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
