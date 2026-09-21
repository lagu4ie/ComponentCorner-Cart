import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  // Step 3: Create cart state
  const [cart, setCart] = useState([]);

  // Step 2: Products data array
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  // Step 4: Add product to cart
  const addToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        cartId: crypto.randomUUID()
      }
    ]);

    console.log("Added to cart:", product);
  };

  // Step 11: Remove a specific cart item using filter
  const removeFromCart = (cartId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.cartId !== cartId)
    );
  };

  // Step 12: Calculate total using reduce
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div id="home">
      {/* Step 7: Pass cart count to Header */}
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <main id="products">
        <h2>Featured Products</h2>

        {/* Step 5: Display products using map */}
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {/* Step 10: Shopping cart section */}
        <section className="shopping-cart" id="cart">
          <h2>Shopping Cart ({cart.length})</h2>

          {/* Step 13: Handle empty cart */}
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {/* Display cart items using map */}
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.cartId}
                    item={item}
                    onRemove={() => removeFromCart(item.cartId)}
                  />
                ))}
              </div>

              {/* Display total */}
              <h3 className="cart-total">
                Total: ${cartTotal.toFixed(2)}
              </h3>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;