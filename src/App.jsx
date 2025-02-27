import { Routes, Route } from 'react-router-dom';
import "./App.css";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <div className="main-content">
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/" element={
              <div className="product-list">
                <ProductCard
                  title="Egg Rice"
                  price={29.99}
                  description="This is the first product."
                />
                <ProductCard
                  title="Dum Biryani"
                  price={49.99}
                  description="This is the second product."
                />
                <ProductCard
                  title="Chicken Leg piece"
                  price={19.99}
                  description="This is the third product."
                />
                <ProductCard
                  title="Polio chicken leg piece"
                  price={39.99}
                  description="This is the fourth product."
                />
              </div>
            }/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
