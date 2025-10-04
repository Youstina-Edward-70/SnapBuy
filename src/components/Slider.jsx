import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Slider = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products?limit=194");
                const allProducts = res.data.products;

                // 8 products randomly
                const randomProducts = allProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8);

                setProducts(randomProducts);
            } catch (error) {
                console.error("Error fetching random products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>

            {loading ? (
                <div className="flex justify-center gap-4 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-[220px] flex flex-col items-center rounded-lg p-2"
                        >
                            <Skeleton variant="rounded" width={220} height={150} />
                        </div>
                    ))}
                </div>
            ) : (
                <Splide
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        autoWidth: true,
                        gap: "1rem",
                        autoScroll: { speed: 1 },
                    }}
                    extensions={{ AutoScroll }}
                    aria-label="My Auto Scroll Splide"
                >
                    {products.map((product, index) => (
                        <SplideSlide key={index} className="flex-shrink-0 w-[200px]">
                            <Link to={`/products/${product.id}`} >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                />
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            )}
            <div className="flex justify-center">
                <Link
                    to="/products"
                    className="mt-6 px-6 py-2 rounded-lg transition 
                    bg-blue-500 text-white hover:bg-blue-700 
                    dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                    More Products
                </Link>
            </div>
        </div>
    );
};

export default Slider;
