import React, { useState } from "react";
import './ProductCard.css'
import Product from "./Product/Product";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ProductCard = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDrawerOpen(false);
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(item => item.category === selectedCategory);

  return (
    <div className="productcard__container" id="products">
      <div className="productcard__categories">
        <div className="categories__button" onClick={() => setDrawerOpen(true)}><span>Filtruj</span></div>
      </div>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button onClick={() => handleCategoryChange("All")}>
            <ListItemText primary="Wszystkie" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryChange("SAUNA, SPA")}>
            <ListItemText primary="Sauna/Spa" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryChange("MORSOWANIE")}>
            <ListItemText primary="Morsowanie" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryChange("PREZENTY")}>
            <ListItemText primary="Prezenty" />
          </ListItem>
          <ListItem button onClick={() => handleCategoryChange("ODZIEŻ ROBOCZA")}>
            <ListItemText primary="Odzież robocza" />
          </ListItem>
        </List>
      </Drawer>
      <div className="productcard__products">
        {filteredProducts.map(item => (
          <Product 
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
