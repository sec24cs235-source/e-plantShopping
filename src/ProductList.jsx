import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1b?auto=format&fit=crop&w=600&q=80",
        description: "A hardy indoor plant that helps purify the air.",
        cost: 25
      },
      {
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
        description: "An elegant plant with beautiful white flowers.",
        cost: 30
      },
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
        description: "An easy-care plant suitable for indoor spaces.",
        cost: 20
      },
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
        description: "A useful succulent with thick green leaves.",
        cost: 22
      },
      {
        name: "Boston Fern",
        image: "https://images.unsplash.com/photo-1614594575920-31b9b4c4b1d1?auto=format&fit=crop&w=600&q=80",
        description: "A lush green fern that adds freshness indoors.",
        cost: 28
      },
      {
        name: "Areca Palm",
        image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
        description: "A tropical palm that brightens indoor spaces.",
        cost: 35
      }
    ]
  },

  {
    category: "Succulents",
    plants: [
      {
        name: "Echeveria",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
        description: "A beautiful rosette-shaped succulent.",
        cost: 15
      },
      {
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "A classic low-maintenance succulent.",
        cost: 18
      },
      {
        name: "Haworthia",
        image: "https://images.unsplash.com/photo-1533062618053-d51e617307ec?auto=format&fit=crop&w=600&q=80",
        description: "A compact succulent with attractive striped leaves.",
        cost: 16
      },
      {
        name: "String of Pearls",
        image: "https://images.unsplash.com/photo-1600697395542-ef3ee6e6b8a0?auto=format&fit=crop&w=600&q=80",
        description: "A trailing succulent perfect for hanging pots.",
        cost: 24
      },
      {
        name: "Zebra Haworthia",
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
        description: "A striking succulent with patterned leaves.",
        cost: 17
      },
      {
        name: "Gasteria",
        image: "https://images.unsplash.com/photo-1597055181300-ae90f2a4b7f2?auto=format&fit=crop&w=600&q=80",
        description: "A sturdy succulent with thick textured leaves.",
        cost: 19
      }
    ]
  },

  {
    category: "Decorative Indoor Plants",
    plants: [
      {
        name: "Monstera",
        image: "https://images.unsplash.com/photo-1614594575920-31b9b4c4b1d1?auto=format&fit=crop&w=600&q=80",
        description: "A tropical statement plant with iconic leaves.",
        cost: 40
      },
      {
        name: "Calathea",
        image: "https://images.unsplash.com/photo-1597055181300-ae90f2a4b7f2?auto=format&fit=crop&w=600&q=80",
        description: "A decorative plant with patterned foliage.",
        cost: 32
      },
      {
        name: "Rubber Plant",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "A stylish plant with glossy green leaves.",
        cost: 36
      },
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1632207691148-9e9c4e4d8d0e?auto=format&fit=crop&w=600&q=80",
        description: "A beautiful and low-maintenance indoor plant.",
        cost: 34
      },
      {
        name: "Philodendron",
        image: "https://images.unsplash.com/photo-1616766380422-8b9a4e7d9c1e?auto=format&fit=crop&w=600&q=80",
        description: "A versatile leafy plant for indoor spaces.",
        cost: 29
      },
      {
        name: "Chinese Money Plant",
        image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
        description: "A charming plant with round green leaves.",
        cost: 23
      }
    ]
  }
];

function ProductList({ onHome, onCart }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAddedToCart = (plantName) => {
    return cartItems.some(
      item => item.name === plantName
    );
  };

  return (
    <div className="product-list-container">

      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={onHome}>
            Home
          </button>

          <button onClick={() => window.scrollTo(0, 0)}>
            Plants
          </button>

          <button onClick={onCart}>
            🛒 Cart ({cartItemCount})
          </button>
        </div>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      <p>
        Explore our collection of beautiful plants.
      </p>

      {plantsArray.map((category) => (
        <section key={category.category}>

          <h2 className="category-name">
            {category.category}
          </h2>

          <div className="product-grid">

            {category.plants.map((plant) => {

              const added = isAddedToCart(
                plant.name
              );

              return (
                <div
                  className="product-card"
                  key={plant.name}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <h4>${plant.cost}</h4>

                  <button
                    className="product-button"
                    disabled={added}
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >
                    {added
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              );
            })}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;
