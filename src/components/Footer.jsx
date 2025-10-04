import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 transition-colors duration-500">

            {/* Links & Socials */}
            <div className="max-w-6xl mx-auto px-16 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h4 className="font-bold text-lg mb-4">SnapBuy</h4>
                    <p className="text-sm">
                        Shop the best products online. Quality guaranteed and fast delivery.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/products" className="hover:underline">Shop</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                    <div className="flex gap-4 text-xl">
                        <Link to="https://www.facebook.com/" className="hover:text-blue-600"><FaFacebookF /></Link>
                        <Link to="https://x.com/" className="hover:text-blue-400"><FaTwitter /></Link>
                        <Link to="https://www.instagram.com/" className="hover:text-pink-500"><FaInstagram /></Link>
                        <Link to="https://www.linkedin.com/feed/" className="hover:text-blue-800"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center py-4 transition-colors duration-500 dark:bg-gray-800 bg-gray-200">
                &copy; 2025 Youssy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
