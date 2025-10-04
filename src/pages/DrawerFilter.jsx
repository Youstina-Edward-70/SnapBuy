import React, { useState, useEffect } from 'react'
import {
    Drawer,
    Button,
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
} from "@mui/material";
import { FaFilter } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DrawerBar = ({ onCategorySelect }) => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.error(err));
    }, [])

    const handleCategoryClick = (cat) => {
        onCategorySelect(cat);
        navigate(`/products?category=${encodeURIComponent(cat)}`);
        setOpen(false);
    };

    // Capitalize first letter of each category
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <>
            <div className="flex justify-end mb-4">{/*-----------------------------------------------------------------------------------*/}
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaFilter />}
                    onClick={() => setOpen(true)}
                >
                    Filters
                </Button>
            </div>

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box className="w-[250px] p-4">
                    <h2 className="text-xl font-bold mb-3">Filter By</h2>

                    <Divider className="mb-4" />

                    <Typography variant="h6" gutterBottom>Categories</Typography>

                    <List>
                        <ListItem disablePadding sx={{ mb: 1 }}>
                            <ListItemButton onClick={() => handleCategoryClick("")}>
                                <ListItemText primary="All Products" />
                            </ListItemButton>
                        </ListItem>

                        {categories.map((cat) => (
                            <ListItem key={cat} disablePadding>
                                <ListItemButton onClick={() => handleCategoryClick(capitalize(cat))}>
                                    <ListItemText primary={capitalize(cat)} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerBar
