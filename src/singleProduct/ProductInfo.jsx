import React from 'react'
import CartButton from '../cart/CartButton'

const ProductInfo = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full md:w-1/3 rounded-lg border"
            />

            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="text-lg font-semibold">
                    Price: ${product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                    })}{" "}
                    <span className="text-red-500">({product.discountPercentage}% off)</span>
                </p>
                <p>Stock: {product.stock}</p>
                <p>Brand: {product.brand}</p>
                <p>SKU: {product.sku}</p>
                <p>Weight: {product.weight}g</p>
                <p>
                    Dimensions: {product.dimensions.width} x {product.dimensions.height} x{" "}
                    {product.dimensions.depth} cm
                </p>
                <p>Warranty: {product.warrantyInformation}</p>
                <p>Shipping: {product.shippingInformation}</p>
                <p>Availability: {product.availabilityStatus}</p>
                <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
                <p>Return Policy: {product.returnPolicy}</p>

                <CartButton product={product} className={"px-4 py-2 mt-5 bg-blue-600 text-white hover:bg-blue-700"} />
            </div>
        </div>
    )
}

export default ProductInfo
