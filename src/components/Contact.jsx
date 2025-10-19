import React from "react";

const Contact = () => {
    return (
        <section className="dark:bg-gray-700 bg-white transition duration-500">
            <div className="max-w-4xl mx-auto px-6 py-12 ">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
                    Contact Us
                </h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-10">
                    Have questions, feedback, or need help?
                    Reach out to us and we'll get back to you as soon as possible.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">
                            Get in touch
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 transition duration-500">
                            📍 Address: Cairo, Egypt <br />
                            📞 Phone: +20 123 456 789 <br />
                            📧 Email: support@snapbuy.com <br />
                        </p>
                    </div>

                    <form className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
