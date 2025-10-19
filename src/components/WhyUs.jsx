import React from 'react'
import { Container } from "@mui/material";
import { FaTruckFast, FaTags } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";

const WhyUs = () => {
    return (
        <section>
            <Container maxWidth="lg" className="my-20">
                <h2 className="text-2xl font-bold text-center mb-12">
                    Why Choose <span className="text-blue-600 dark:text-blue-400 transition duration-500">SnapBuy</span>?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="px-5 py-8 rounded-2xl shadow dark:bg-gray-800 dark:text-gray-100 hover:shadow-xl transition duration-500">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <FaBoxes className="text-4xl text-blue-600 dark:text-blue-400 transition duration-500" />
                            <p className="font-semibold">
                                Wide Range of Products
                            </p>
                            <p color="text.secondary" className="dark:text-gray-300 transition duration-500">
                                Explore thousands of products across categories from electronics to fashion and more.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="px-5 py-8 rounded-2xl shadow dark:bg-gray-800 dark:text-gray-100 hover:shadow-xl transition duration-500">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <FaTruckFast className="text-4xl text-blue-600 dark:text-blue-400 transition duration-500" />
                            <p className="font-semibold">
                                Fast & Secure Delivery
                            </p>
                            <p color="text.secondary" className="dark:text-gray-300 transition duration-500">
                                Get your orders delivered quickly and safely with real-time tracking.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="px-5 py-8 rounded-2xl shadow dark:bg-gray-800 dark:text-gray-100 hover:shadow-xl transition duration-500">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <FaTags className="text-4xl text-blue-600 dark:text-blue-400 transition duration-500" />
                            <p className="font-semibold">
                                Best Prices Guaranteed
                            </p>
                            <p color="text.secondary" className="dark:text-gray-300  transition duration-500">
                                Enjoy the best deals and exclusive discounts on all your favorite products.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhyUs