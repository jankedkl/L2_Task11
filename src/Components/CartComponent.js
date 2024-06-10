import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/StoreSlice";
import CartCount from "./CartCountComponent";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <CartCount />
      <div>
        <ul className="shopping-cart">
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - R{item.price.toFixed(2)}
              <button
                className="remove-button"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="total-price">Total: R{total.toFixed(2)}</div>
      </div>
    </div>
  );
}
