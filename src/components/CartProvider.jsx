import React, { createContext, useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { Alert, Snackbar } from "@mui/material";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { darkMode } = useDarkMode();
    const [cartProducts, setCartProducts] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartProducts(storedCart);
    }, []);

    /* Toggle Cart */
    const toggleCart = async (product) => {
        const exists = cartProducts.find(p => p.id === product.id);

        if (!exists) {
            setCartProducts(prev => {
                const newCart = [...prev, { ...product, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
            setAlert({ open: true, message: `"${product.title}" added to the cart!`, severity: "success" });
        } else {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: `"${product.title}" will be removed from the cart.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, Remove",
                cancelButtonText: "Cancel",
                background: darkMode ? "#1f2937" : "#fff",
                color: darkMode ? "#f3f4f6" : "#111827",
            });

            if (result.isConfirmed) {
            const newCart = cartProducts.filter(p => p.id !== product.id);
            setCartProducts(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));

            Swal.fire({
                    title: "Removed Successfully",
                    text: `"${product.title}" has been removed from the cart.`,
                    icon: "success",
                    background: darkMode ? "#1f2937" : "#fff",
                    color: darkMode ? "#f3f4f6" : "#111827",
                    timer: 1800,
                    showConfirmButton: false,
                });
            }
        }
    };

    /* Update Quantity */
    const updateQuantity = (productId, type) => {
        setCartProducts(prev => {
            let newCart = prev.map(p => {
                if (p.id !== productId) return p;

                if (type === 'increase') {
                    return { ...p, quantity: (p.quantity || 1) + 1 };
                }

                if (type === 'decrease') {
                    return { ...p, quantity: (p.quantity || 1) - 1 };
                }

                return p;
            });

            newCart = newCart.filter(p => p.quantity > 0);

            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };


    return (
        <CartContext.Provider
            value={{
                cartProducts,
                cartCount: cartProducts.length,
                toggleCart,
                updateQuantity,
                setCartProducts
            }}
        >
            {children}

            <Snackbar
                open={alert.open}
                autoHideDuration={2000}
                onClose={() => setAlert({ ...alert, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={() => setAlert({ ...alert, open: false })}
                    severity={alert.severity}
                    sx={{ width: "100%" }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    );
};
