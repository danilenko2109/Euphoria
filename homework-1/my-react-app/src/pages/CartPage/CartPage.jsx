import { useState } from "react";
import PropTypes from "prop-types";
import "./CartPage.scss";
import { NavLink } from "react-router";
import Modal from "../../components/Modal/Modal";

const CartPage = ({ cartItems, onRemove, image, title }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 5;
  const roundedFee = Number(deliveryFee.toFixed(2));
  const finalPrice = totalPrice + deliveryFee;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="cart">
      <h2 className="cart__title">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <p className="cart__empty-text">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart__container">
            <div className="cart__items">
              {cartItems.map((item) => (
                <div key={item.article} className="cart__item">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="cart__item-image" 
                  />
                  <div className="cart__item-content">
                    <h3 className="cart__item-title">{item.title}</h3>
                    <p className="cart__item-text">Price: ${item.price}</p>
                    <p className="cart__item-text">Article: {item.article}</p>
                    <p className="cart__item-text">Color: {item.color}</p>
                    <button 
                      onClick={() => onRemove(item.article)}
                      className="cart__item-remove"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart__summary">
              <div className="cart__summary-total">Total: ${finalPrice}</div>
              <p className="cart__summary-row cart__summary-subtotal">
                Subtotal: <span>${totalPrice}</span>
              </p>
              <p className="cart__summary-row">
                Delivery: <span>${roundedFee}</span>
              </p>
              <NavLink 
                to="/get-it" 
                className="cart__checkout"
              >
                Go to checkout
              </NavLink>
            </div>
          </div>

          {isModalOpen && (
            <Modal onClose={closeModal}>
              <img src={image} alt={title} className="modal__image" />
              <h2 className="modal__title">Item added to cart</h2>
              <p className="modal__text">
                {title} has been added to your shopping cart.
              </p>
              <button onClick={closeModal} className="modal__button">
                Close
              </button>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  image: PropTypes.string,
  title: PropTypes.string
};

export default CartPage;