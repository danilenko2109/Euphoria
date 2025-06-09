import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./SearchPage.scss";

const SearchPage = ({ products, onAddToCart, onAddToFavorites, favoriteItems }) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.trim() !== "") {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Enter product name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="search-results">
        {isSearching ? (
          <div className="search-loading">Searching...</div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFavorite = favoriteItems.some(fav => fav.article === product.article);
            return (
              <ProductCard
                key={product.article}
                {...product}
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                isFavorite={isFavorite}
              />
            );
          })
        ) : query ? (
          <p className="no-results">
            No products found for "<strong>{query}</strong>"
          </p>
        ) : (
          <p className="start-search">Enter search query to find products</p>
        )}
      </div>
    </div>
  );
};



SearchPage.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  favoriteItems: PropTypes.array.isRequired,
};

export default SearchPage;
