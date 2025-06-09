import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";
import ViewModeToggle from "../ViewModeToggle/ViewModeToggle"; // импорт переключателя
import { useViewMode } from "../../context/ViewModeContext";
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

  const { viewMode } = useViewMode();

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

      <ViewModeToggle /> {/* Добавляем переключатель здесь */}

      {viewMode === "grid" ? (
        <div className="product-list grid-view">
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
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              const isFavorite = favoriteItems.some(
                (fav) => fav.article === product.article
              );

              return (
                <tr key={product.article}>
                  <td>
                    <img src={product.image} alt={product.title} width="50" />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>
                    <button onClick={() => onAddToCart(product)}>Add</button>
                    <button onClick={() => onAddToFavorites(product)}>
                      {isFavorite ? "★" : "☆"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
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
