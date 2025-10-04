import React from "react";
import { Link } from "react-router";

const Hero = () => {
    return (
        <header className="mb-5">
            <div
                className="relative flex items-center justify-center text-center h-[400px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://wallpaperaccess.com/full/2593068.jpg')"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Welcome to Our Store
                    </h1>
                    <h4 className="text-xl md:text-2xl mb-4">
                        Discover amazing products at unbeatable prices.
                    </h4>
                    <Link
                        to="/products"
                        className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Hero;
