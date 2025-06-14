import { Routes, Route } from "react-router";
import ProductList from "./components/ProductList/ProductList";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritePage/FavoritePage";
import CheckoutPage from "./pages/ChechoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SearchPage from "./pages/SearchPage/SearchPage";


const AppRoutes = ({ 
  products, 
  handleAddToCart, 
  toggleFavorite,
  cartItems, 
  handleRemove, 
  favoriteItems,
  
}) => {
  return (
    <Routes>
      <Route path="/Euphoria" element={<HomePage />} />

      <Route
        path="/products"
        element={
          <ProductList 
            products={products}
            onAddToCart={handleAddToCart}
            onAddToFavorites={toggleFavorite}
            favoriteItems={favoriteItems}
          />
        }
      />

      <Route
        path="/cart"
        element={
          <CartPage
            cartItems={cartItems}
            onRemove={handleRemove}
          />
        }
      />

     <Route
  path="/products/:id"
  element={
    <ProductPage
       products={products}
            onAddToCart={handleAddToCart}
            onAddToFavorites={toggleFavorite}
            favoriteItems={favoriteItems}
    />
  }
/>


      <Route
        path="/favorites"
        element={
          <FavoritesPage
            favoriteItems={favoriteItems}
            onAddToCart={handleAddToCart}
            toggleFavorite={toggleFavorite}
          />
        }
      />

      <Route
        path="/get-it"
        element={<CheckoutPage />}
      />
       <Route
    path="/search"
    element={
      <SearchPage
        products={products} // или из Redux/hook
        onAddToCart={handleAddToCart}
        
        favoriteItems={favoriteItems}
      />
    }
  />
    </Routes>
  );
};

export default AppRoutes;
