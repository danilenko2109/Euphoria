import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import "./FavoritePage.scss";

const FavoritesPage = ({ favoriteItems, onAddToCart, toggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="favorites">
      <h2 className="favorites__title">Your Favorites</h2>
      
      {favoriteItems.length === 0 ? (
        <div className="favorites__empty">
          <p className="favorites__empty-text">No favorite items yet.</p>
        </div>
      ) : (
        <div className="favorites__list">
          {favoriteItems.map((item) => (
            <div key={item.article} className="favorites__item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="favorites__item-image" 
              />
              <div className="favorites__item-content">
                <h4 className="favorites__item-title">{item.title}</h4>
                <p className="favorites__item-price">${item.price}</p>
                <div className="favorites__item-actions">
                  <button
                    onClick={() => {
                      onAddToCart(item);
                      toggleFavorite(item);
                      setSelectedProduct(item);
                      setIsModalOpen(true);
                    }}
                    className="favorites__item-button favorites__item-button--add"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => toggleFavorite(item)}
                    className="favorites__item-button favorites__item-button--remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedProduct && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            className="modal__image" 
          />
          <h2 className="modal__title">Item added to cart</h2>
          <p className="modal__text">
            {selectedProduct.title} has been added to your shopping cart.
          </p>
          <Button 
            onClick={() => setIsModalOpen(false)}
            className="modal__button"
          >
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteItems: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default FavoritesPage;