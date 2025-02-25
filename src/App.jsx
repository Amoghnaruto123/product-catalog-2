import './App.css';
import ProductCard from './components/ProductCard';

function App() {
    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="site-name">
                    BetterBuys
                </div>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
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
        </div>
    );
}

export default App;
