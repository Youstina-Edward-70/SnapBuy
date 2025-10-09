import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CartButton from "../components/CartButton";
import DrawerBar from "./DrawerFilter";
import { Typography, Skeleton } from "@mui/material";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    const categoryQuery = searchParams.get("category");
    const currentCategory = categoryQuery || selectedCategory;

    // Randomly Sorting
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = currentCategory
                    ? `https://dummyjson.com/products/category/${currentCategory}`
                    : searchQuery
                        ? `https://dummyjson.com/products/search?q=${searchQuery}`
                        : 'https://dummyjson.com/products?limit=48';

                const response = await axios.get(url);
                const fetchedProducts = response.data.products || [];

                const randomProducts = shuffleArray(fetchedProducts);
                setProducts(randomProducts);
            }
            catch (error) { console.error("Error fetching products:", error); }
            setLoading(false);
        };
        fetchProducts();
    }, [currentCategory, selectedCategory, searchQuery]);

    return (
        <div
            className="min-h-screen py-10 px-6 transition-colors duration-500 dark:bg-gray-800 dark:text-white bg-white text-gray-900">
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold">Our Products</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Browse through our collection of amazing products.
                </p>
            </div>

            <section className="mx-auto max-w-6xl">
                <DrawerBar onCategorySelect={setSelectedCategory} />

                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                    {currentCategory
                        ? `Products in "${currentCategory}" category`
                        : searchQuery
                            ? `Search results for "${searchQuery}"`
                            : "All Products"}
                </Typography>


                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="border rounded-lg p-4 shadow dark:border-gray-600 dark:bg-gray-700 bg-gray-100">
                                <Skeleton variant="rectangular" height={180} animation="wave" sx={{ borderRadius: 2, mb: 2 }} />
                                <Skeleton variant="text" height={30} width="80%" />
                                <Skeleton variant="text" height={20} width="60%" />
                                <Skeleton variant="rectangular" height={40} width="100%" sx={{ borderRadius: 2, mt: 2 }} />
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center mt-10">

                        <p>No products found.</p>
                    </div>
                ) : null}


                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col dark:border-gray-600 dark:bg-gray-700 bg-gray-100 transition duration-500">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>
                                <div className="mt-auto"><div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                    {product.price.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 2,
                                    })}</div></div>
                            </div>
                            <div className="flex flex-col justify-center gap-3 p-4 border-t border-gray-300 dark:border-gray-600 transition duration-500">
                                <CartButton product={product} className={"px-4 py-2 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"} />
                                <Link to={`${product.id}`} className="px-4 py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-500">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default ProductsPage;
