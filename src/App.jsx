import React from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = React.useState("home");

  if (page === "about") {
    return (
      <div>
        <nav>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("plants")}>
            Plants
          </button>

          <button onClick={() => setPage("cart")}>
            Cart
          </button>
        </nav>

        <AboutUs />
      </div>
    );
  }

  if (page === "plants") {
    return (
      <ProductList
        onHome={() => setPage("home")}
        onCart={() => setPage("cart")}
      />
    );
  }

  if (page === "cart") {
    return (
      <CartItem
        onHome={() => setPage("home")}
        onPlants={() => setPage("plants")}
      />
    );
  }

  return (
    <div className="landing-page">
      <div className="background-image">
        <div className="content">
          <div className="landing_content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery – your destination
              for beautiful indoor plants.
            </p>

            <button
              className="get-started-button"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>

            <br /><br />

            <button
              className="get-started-button"
              onClick={() => setPage("about")}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
