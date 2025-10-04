import React, { useContext } from 'react'
import { CartContext } from './CartProvider';

const TotalPrice = () => {
    const { cartProducts } = useContext(CartContext);

    return (
        <div className="relative flex items-center justify-between mt-5 p-6 dark:border-gray-600 dark:bg-gray-700 hover:dark:bg-gray-600 bg-gray-100 hover:bg-gray-200 transition duration-500">
            <div className="mt-4 w-full">
                {/* Items Count */}
                <div className="my-2 grid grid-cols-2 border-b border-gray-300 dark:border-gray-600 pb-1 text-md font-medium text-gray-900 dark:text-white transition-colors duration-500">
                    <p className="text-md text-gray-700 dark:text-gray-300 transition-colors duration-500 text-left">
                        Items Count:
                    </p>
                    <p className="text-right">
                        {cartProducts.reduce((sum, product) => sum + product.quantity, 0)}
                    </p>
                </div>

                {/* Total */}
                <div className="my-2 grid grid-cols-2 pt-1 font-bold text-xl text-gray-900 dark:text-white transition-colors duration-500">
                    <p className="text-lg font-semibold text-left">Total:</p>
                    <p className="text-right font-medium">
                        {cartProducts
                            .reduce((sum, product) => sum + product.price * product.quantity, 0)
                            .toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 2,
                            })}
                    </p>
                </div>

            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-2 left-0 w-full h-5
                bg-white dark:bg-gray-800
                [mask-image:radial-gradient(circle,black_50%,transparent_52%)]
                [mask-repeat:repeat-x]
                [mask-size:30px_20px]
                transition-colors duration-500 ease-in-out">
            </div>

            <div className="absolute -bottom-2 left-0 w-full h-5
                bg-white dark:bg-gray-800
                [mask-image:radial-gradient(circle,black_50%,transparent_52%)]
                [mask-repeat:repeat-x]
                [mask-size:30px_20px]
                transition-colors duration-500 ease-in-out">
            </div>


        </div>
    )
}

export default TotalPrice
