import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!query.trim()) return;
        navigate(`/products?search=${encodeURIComponent(query)}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex-1 max-w-md">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2
                        dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500
                        bg-gray-100 border-gray-300 text-gray-900 focus:ring-blue-500
                        transition-colors duration-500"
                />
                <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    <FaSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
