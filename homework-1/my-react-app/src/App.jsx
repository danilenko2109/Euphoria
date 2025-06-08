import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productsSlice";
import {
  closeImageModal,
  closeTextModal,
} from "./store/modalSlice";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModalImage from "./components/ModalImage/ModalImage";
import ModalText from "./components/ModalText/ModalText";
import AppRoutes from "./AppRoutes";

import "./styles.scss";

export default function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  const isImageModalOpen = useSelector((state) => state.modal.isImageModalOpen);
  const isTextModalOpen = useSelector((state) => state.modal.isTextModalOpen);

  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCartItems(JSON.parse(storedCart));

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) setFavoriteItems(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemove = (article) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.article !== article)
    );
  };

  const toggleFavorite = (product) => {
    const exists = favoriteItems.some(
      (item) => item.article === product.article
    );
    if (exists) {
      setFavoriteItems(
        favoriteItems.filter((item) => item.article !== product.article)
      );
    } else {
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  return (
    <div className="app">
      <Header 
      cartItems={cartItems} favoriteItems={favoriteItems}
      />

      <AppRoutes
        cartItems={cartItems}
        handleRemove={handleRemove}
        products={products}
        handleAddToCart={handleAddToCart}
        toggleFavorite={toggleFavorite}
        favoriteItems={favoriteItems}
      />

      <Footer />

      {isImageModalOpen && (
        <ModalImage onClose={() => dispatch(closeImageModal())} />
      )}
      {isTextModalOpen && (
        <ModalText onClose={() => dispatch(closeTextModal())} />
      )}
    </div>
  );
}
