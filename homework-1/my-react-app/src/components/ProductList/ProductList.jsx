import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";
import "./ProductList.scss";

const ProductList = ({
  products,
  onAddToCart,
  onAddToFavorites,
  favoriteItems,
}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const colors = [...new Set(products.map((p) => p.color))];
  const categories = [...new Set(products.map((p) => p.category))];

  // фильтрация по цвету и категории
  let filteredProducts = products.filter((product) => {
    const colorMatch = selectedColor === "" || product.color === selectedColor;
    const categoryMatch =
      selectedCategory === "" || product.category === selectedCategory;
    return colorMatch && categoryMatch;
  });

  // сортировка по цене
  if (priceSort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (priceSort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="product-list-container">
      <FilterBar
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceSort={priceSort}
        onPriceSortChange={setPriceSort}
      />

      <div className="product-list">
        {filteredProducts.map((product) => {
          const isFavorite = favoriteItems.some(
            (fav) => fav.article === product.article
          );

          return (
            <ProductCard
              key={product.article}
              {...product}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  favoriteItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
