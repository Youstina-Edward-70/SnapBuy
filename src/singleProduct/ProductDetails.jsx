import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';
import ProductInfo from './ProductInfo';
import Skeleton from '@mui/material/Skeleton';

const ProductDetails = () => {
    const params = useParams();

    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
                const productData = res.data;

                if (productData.reviews) {
                    productData.reviews = productData.reviews.map(r => ({
                        ...r,
                        date: new Date(r.date),
                    }));
                }

                setProduct(productData);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
    }, [params.id]);

    if (!product) {
        return (
            <div className="py-10 px-5 bg-white text-gray-900 transition-colors duration-500">
                <div className="max-w-5xl mx-auto p-6 border rounded-lg shadow bg-gray-100">
                    <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2, mb: 3 }} />
                    <Skeleton variant="text" width="60%" height={40} />
                    <Skeleton variant="text" width="40%" height={30} />
                    <Skeleton variant="rectangular" height={70} sx={{ borderRadius: 2, mt: 4 }} />
                    <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mt: 4 }} />
                </div>
            </div>
        );
    }

    return (
        <div className='py-10 px-5 dark:bg-gray-800 dark:text-white bg-white text-gray-900 transition-colors duration-500'>
            <div className="max-w-5xl mx-auto p-6 border rounded-lg shadow hover:shadow-lg dark:border-gray-600 dark:bg-gray-700 bg-gray-100 transition duration-500">
                {/* Product Info */}
                <ProductInfo product={product} />

                <Reviews reviews={product.reviews} />
            </div >
        </div>
    );
}

export default ProductDetails;
