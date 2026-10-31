import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem({ onHome, onPlants }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.cost * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      })
    );
  };

  return (
    <div>

      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={onHome}>
            Home
          </button>

          <button onClick={onPlants}>
            Plants
          </button>

          <button>
            🛒 Cart ({totalItems})
          </button>
        </div>
      </nav>

      <main className="cart-page">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>
              Your cart is empty 🌱
            </h2>

            <p>
              Add some beautiful plants to your cart.
            </p>

            <button
              onClick={onPlants}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div>

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.name}
              >

                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    Unit Price: ${item.cost}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Total Cost: $
                    {item.cost * item.quantity}
                  </p>

                  <div>

                    <button
                      className="cart-item-button"
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      className="cart-item-button"
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="cart-item-delete"
                    onClick={() =>
                      dispatch(
                        removeItem(item.name)
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

            <div className="total_cart_amount">

              Total Cart Amount: $
              {totalAmount}

            </div>

            <button
              onClick={() =>
                alert("Coming Soon")
              }
            >
              Checkout
            </button>

            <button
              onClick={onPlants}
            >
              Continue Shopping
            </button>

          </div>

        )}

      </main>

    </div>
  );
}

export default CartItem;
