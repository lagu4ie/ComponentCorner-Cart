import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div id="home">
      <Header storeName="ComponentCorner" />

      <main id="products">
        <h2>Featured Products</h2>

        <div className="products">
          <ProductCard
            name="Gaming Laptop"
            price={999}
            image="https://placehold.co/600x400"
            description="A powerful laptop for gaming."
          />

          <ProductCard
            name="Wireless Headphones"
            price={149}
            image="https://placehold.co/600x400"
            description="Comfortable headphones with great sound."
          />

          <ProductCard
            name="Gaming Mouse"
            price={59}
            image="https://placehold.co/600x400"
            description="A fast gaming mouse."
          />
        </div>
      </main>
    </div>
  );
}

export default App;