import React, { useContext } from "react";
import { CartContext } from "../components/CartProvider";
import FormValidation from "../components/FormValidation";

const Checkout = () => {
    const { cartProducts } = useContext(CartContext);

    const totalPrice = cartProducts
        .reduce((sum, product) => sum + product.price * product.quantity, 0)
        .toFixed(2);

    return (
        <section className="dark:bg-gray-700 bg-white transition duration-500">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400 transition duration-500">
                    Checkout
                </h1>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow space-y-4 transition duration-500">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartProducts.length === 0 ? (
                            <p className="text-gray-600 dark:text-gray-400 transition duration-500">Your cart is empty.</p>
                        ) : (
                            <>
                                <ul className="space-y-3">
                                    {cartProducts.map((product) => (
                                        <li
                                            key={product.id}
                                            className="flex items-center justify-between border-b pb-2 dark:border-gray-600 transition duration-500"
                                        >
                                            <span className="flex-1 mr-4 dark:text-gray-300 transition duration-500">
                                                {product.title} × {product.quantity}
                                            </span>
                                            <span className="font-semibold">
                                                ${(product.price * product.quantity).toFixed(2)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between pt-4 font-bold text-lg">
                                    <span>Total:</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </>
                        )}
                    </div>

                    <FormValidation />
                </div>
            </div >
        </section >
    );
};

export default Checkout;
