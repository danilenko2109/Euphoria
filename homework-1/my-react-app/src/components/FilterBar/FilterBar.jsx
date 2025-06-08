import React from "react";
import PropTypes from "prop-types";
import "./FilterBar.scss";

const FilterBar = ({
  colors,
  selectedColor,
  onColorChange,
  categories,
  selectedCategory,
  onCategoryChange,
  priceSort,
  onPriceSortChange,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="color-filter">Filter by color:</label>
        <select
          id="color-filter"
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
        >
          <option value="">All</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="category-filter">Filter by category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-sort">Sort by price:</label>
        <select
          id="price-sort"
          value={priceSort}
          onChange={(e) => onPriceSortChange(e.target.value)}
        >
          <option value="">None</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  priceSort: PropTypes.string.isRequired,
  onPriceSortChange: PropTypes.func.isRequired,
};

export default FilterBar;
