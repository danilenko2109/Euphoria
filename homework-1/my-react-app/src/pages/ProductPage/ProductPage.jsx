import { useParams, NavLink } from "react-router";
import { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import { FaHeart } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";
import "./ProductPage.scss";

function ProductPage({
  onAddToCart,
  onAddToFavorites,
  favoriteItems
}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const found = productsData.find((item) => item.article === id);
    if (found) {
      setProduct(found);
      setSelectedImage(found.images?.[0] || found.image);
      setSelectedColor(found.color || (found.availableColors?.[0] ?? ""));
      setSelectedSize(found.availableSizes?.[0] || "");
    } else {
      setProduct(null);
    }
  }, [id]);

  const handleAddToCartClick = () => {
    onAddToCart(product);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = () => {
    const favProduct = {
      title: product.title,
      price: product.price,
      image: selectedImage,
      article: product.article,
      color: selectedColor
    };
    onAddToFavorites(favProduct);
  };

  const isFavoriteNow = favoriteItems?.some(
    (item) => item.article === product?.article
  );

  if (!product) {
    return (
      <div className="product-page">
        <h2>Product not found</h2>
        <NavLink className="back-button" to="/products">
          ← Back to catalog
        </NavLink>
      </div>
    );
  }

  return (
    <div className="product-page">
      <NavLink className="product-page__back-button" to="/products">
        ← Back to catalog
      </NavLink>

      <div className="product-page__container">
        <div className="product-page__gallery">
          <div className="product-page__gallery-main">
            <img src={selectedImage} alt={product.title} />
          </div>
          <div className="product-page__gallery-thumbnails">
            {(product.images || [product.image]).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={
                  img === selectedImage
                    ? "product-page__gallery-thumbnails--active"
                    : ""
                }
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-page__info">
          <h1 className="product-page__title">{product.title}</h1>
          <div className="product-page__meta">
            <span>Article: {product.article}</span>
            <span>Category: {product.category}</span>
          </div>

          <div className="product-page__rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="product-page__rating-star">
                {i < Math.round(product.rating?.rate || 0) ? "★" : "☆"}
              </span>
            ))}
            <span className="product-page__rating-count">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>

          <div className="product-page__price">{product.price} $</div>

          <div className="product-page__description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {product.availableColors?.length > 0 && (
            <div className="product-page__selector">
              <h3>Color</h3>
              <div className="product-page__color-options">
                {product.availableColors.map((clr, idx) => (
                  <div
                    key={idx}
                    className={`product-page__color-option ${
                      clr === selectedColor
                        ? "product-page__color-option--active"
                        : ""
                    }`}
                    style={{ backgroundColor: clr }}
                    onClick={() => setSelectedColor(clr)}
                    title={clr}
                  />
                ))}
              </div>
            </div>
          )}

          {product.availableSizes?.length > 0 && (
            <div className="product-page__selector">
              <h3>Size</h3>
              <div className="product-page__size-options">
                {product.availableSizes.map((size, idx) => (
                  <button
                    key={idx}
                    className={`product-page__size-option ${
                      size === selectedSize
                        ? "product-page__size-option--active"
                        : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="product-page__actions">
            <button
              onClick={handleAddToCartClick}
              className="product-page__action-btn product-page__action-btn--cart"
            >
              Add to Cart
            </button>

            <button className="product-page__action-btn--cart" onClick={handleAddToFavorites}>
              <FaHeart color={isFavoriteNow ? "red" : "white"} size={20} />
            </button>
          </div>

          <div className="product-page__details">
            <h3>Details</h3>
            <ul>
              {product.material && <li>Material: {product.material}</li>}
              {product.season && <li>Season: {product.season}</li>}
              {product.brand && <li>Brand: {product.brand}</li>}
              {product.country && <li>Country of origin: {product.country}</li>}
              {product.careInstructions && (
                <li>Care instructions: {product.careInstructions}</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img
            src={selectedImage}
            alt={product.title}
            className="modal__image"
          />
          <h2 className="modal__title">Item added to cart</h2>
          <p className="modal__text">
            {product.title} has been added to your shopping cart.
          </p>
          <div className="modal-actions">
            <button
              onClick={() => setIsModalOpen(false)}
              className="modal__button"
            >
              Continue Shopping
            </button>
            <NavLink to="/cart" className="modal__button">
              Go to Cart
            </NavLink>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductPage;
