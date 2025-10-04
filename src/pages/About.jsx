import React from "react";

const About = () => {
    return (
        <section className="dark:bg-gray-700 bg-white transition duration-500">
            <div className="max-w-4xl mx-auto px-6 py-12 ">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400 transition duration-500">
                    About SnapBuy
                </h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 text-center transition duration-500">
                    Welcome to <span className="font-semibold">SnapBuy</span> – your one-stop
                    destination for smart and fast online shopping.
                    We aim to make your shopping experience smooth, enjoyable, and tailored
                    to your needs.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition duration-500">
                        <h2 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 transition duration-500">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition duration-500">
                            At SnapBuy, our mission is to bring you a wide variety of quality
                            products at affordable prices. We believe shopping should be easy,
                            transparent, and fun.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition duration-500">
                        <h2 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400 transition duration-500">
                            Why SnapBuy?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition duration-500">
                            ✅ Fast & secure checkout <br />
                            ✅ Wide range of categories <br />
                            ✅ User-friendly design <br />
                            ✅ Great customer support <br />
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 transition duration-500">
                        Join the SnapBuy Experience!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 transition duration-500">
                        Shop smarter, faster, and better with SnapBuy today.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
