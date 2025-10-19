import React, { useContext } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { CartContext } from '../context/CartProvider';

const CartItem = () => {
    const { cartProducts, updateQuantity, toggleCart } = useContext(CartContext);

    return (
        <>
            {cartProducts.map(product => (
                <li
                    key={product.id}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] gap-4 items-center 
                                border rounded-lg shadow p-4 sm:p-6 
                                dark:border-gray-600 dark:bg-gray-700 hover:dark:bg-gray-600 
                                bg-gray-100 hover:bg-gray-200 transition duration-500"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-28 h-28 sm:w-16 sm:h-16 object-cover rounded"
                        />
                        <div className="text-center sm:text-left text-sm sm:text-base">
                            <h3 className="font-semibold">{product.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 transition-colors">
                                {product.price.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 items-center 
                                    w-[150px] h-[40px] mx-auto
                                    rounded-lg overflow-hidden bg-white dark:bg-gray-800 
                                    font-semibold text-lg transition duration-500">
                        <button
                            className="h-full bg-green-500 hover:bg-green-600 hover:dark:bg-green-400 text-white transition duration-500"
                            onClick={() => updateQuantity(product.id, "decrease")}
                        >
                            -
                        </button>
                        <p className="text-center">{product.quantity}</p>
                        <button
                            className="h-full bg-green-500 hover:bg-green-600 hover:dark:bg-green-400 text-white transition duration-500"
                            onClick={() => updateQuantity(product.id, "increase")}
                        >
                            +
                        </button>
                    </div>

                    <div className="text-center font-semibold text-lg">
                        {(product.price * product.quantity).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 2,
                        })}
                    </div>

                    <button
                        onClick={() => toggleCart(product)}
                        className="px-3 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition justify-self-center sm:justify-self-end"
                    >
                        <FaTrashCan />
                    </button>
                </li>
            ))}
        </>
    )
}

export default CartItem;
