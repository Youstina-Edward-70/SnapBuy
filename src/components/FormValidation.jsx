import React, { useContext, useState } from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useNavigate } from "react-router";
import { CartContext } from './CartProvider';
import Swal from "sweetalert2";

const FormValidation = () => {
    const { cartProducts } = useContext(CartContext);
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        phone: "",
        payment: "cash",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number";
        }
        return newErrors;
    };

    let navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cartProducts || cartProducts.length === 0) {
            Swal.fire({
                title: "Cart is empty!",
                text: "You must add products before placing an order.",
                icon: "error",
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            navigate("/thank-you");
        }
    };



        return (
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-100 dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow transition duration-500"
            >
                <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

                <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition duration-500"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street address"
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition duration-500"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition duration-500"
                        />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+20 123 456 789"
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition duration-500"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                </div>

                <div>
                    <label className="block mb-2 font-medium">Payment Method</label>
                    <div className="flex gap-4">
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="cash"
                                name="payment"
                                control={<Radio />}
                                checked={formData.payment === "cash"}
                                onChange={handleChange}
                                label="Cash on Delivery" />
                            <FormControlLabel
                                value="card"
                                name="payment"
                                control={<Radio />}
                                checked={formData.payment === "card"}
                                onChange={handleChange}
                                label="Credit Card" />
                        </RadioGroup>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                >
                    Place Order
                </button>
            </form>
        )
    }

    export default FormValidation;
