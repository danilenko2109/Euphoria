import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { FaHeart , FaStar} from "react-icons/fa"; 
import "./ProductCard.scss";
import { NavLink } from "react-router";

const ProductCard = ({
  title,
  price,
  image,
  article,
  color,
  onAddToFavorites,
  isFavorite,
 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleAddToFavorites = () => {
    const product = { title, price, image, article, color };
    onAddToFavorites(product);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="product-card">

        <button className="btn1" onClick={handleAddToFavorites}>
          <FaHeart color={isFavorite ? "red" : "gray"} size={20} />
        </button>
       <NavLink to={`/products/${article}`}>
      <img src={image} alt={title} className="product-img" />
      

      <div className="product-actions">
      <h3>{title}</h3>

      <p> ${price}</p>
        
      </div>
       

    {isModalOpen && (
  <Modal onClose={closeModal} className="card__modal">
    <h2 className="modal-title">Added to Cart!</h2>
      <img src={image} alt={title} className="modal-product-img" />
    <div className="modal-content">
      <div className="modal-details">
        <h3>{title}</h3>
        <p className="modal-message">
          Great choice! Your item is now in the shopping cart.
        </p>
      </div>
    </div>
    <div className="modal-actions">
      <Button onClick={closeModal}>Continue Shopping</Button>
      <NavLink to="/cart">
        <Button>

        Go to Cart
        </Button>
      </NavLink>
    </div>
  </Modal>
)}


</NavLink>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default ProductCard;



// const ProductCard = ({
//   title,
//   price,
//   image,
//   article,
//   color,
//   onAddToCart,
//   onAddToFavorites,
//   isFavorite,
//   rating
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddToCart = () => {
//     const product = { title, price, image, article, color };
//     onAddToCart(product);
//     setIsModalOpen(true);
//   };

//   const handleAddToFavorites = () => {
//     const product = { title, price, image, article, color };
//     onAddToFavorites(product);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="product-card">
//       <img src={image} alt={title} className="product-img" />
//       <h3>{title}</h3>
//       <p>Price: ${price}</p>
//       <p>Color: {color}</p>
//       <div className="product-rating">
//         <FaStar color="gold" size={17} />
//         <span>{rating.rate} ({rating.count} reviews)</span>
//       </div>

//       <div className="product-actions">
//         <Button onClick={handleAddToCart}>Add to Cart</Button>
//         <button className="btn1" onClick={handleAddToFavorites}>
//           <FaHeart color={isFavorite ? "red" : "gray"} size={16} />
//         </button>
//         </div>

//     {isModalOpen && (
//   <Modal onClose={closeModal} className="card__modal">
//     <h2 className="modal-title">Added to Cart!</h2>
//       <img src={image} alt={title} className="modal-product-img" />
//     <div className="modal-content">
//       <div className="modal-details">
//         <h3>{title}</h3>
//         <p className="modal-message">
//           Great choice! Your item is now in the shopping cart.
//         </p>
//       </div>
//     </div>
//     <div className="modal-actions">
//       <Button onClick={closeModal}>Continue Shopping</Button>
//       <NavLink to="/cart">
//         <Button>

//         Go to Cart
//         </Button>
//       </NavLink>
//     </div>
//   </Modal>
// )}


//     </div>
//   );
// };
