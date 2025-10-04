import React, { useContext } from "react";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { Link } from "react-router";

import { CartContext } from "./CartProvider";
import { useDarkMode } from "./DarkModeContext";
import SearchBox from "./SearchBox";

function Navbar() {
    const { cartCount } = useContext(CartContext);
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <nav
            className="sticky top-0 z-50 dark:bg-gray-900 dark:text-white bg-white text-gray-900
                shadow transition-colors duration-500"
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-4">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">
                    SnapBuy
                </Link>

                {/* Search Box */}
                <SearchBox />

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Cart */}
                    <Link to={'/cart'} className="relative">
                        <FaShoppingCart className="text-2xl cursor-pointer" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="px-3 py-2 rounded dark:bg-white dark:text-gray-900 bg-gray-900 text-white
                            transition-colors duration-500"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;