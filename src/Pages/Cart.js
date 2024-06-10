import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../store/StoreSlice";

export default function Cart() {
    const items = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const totalItemsInCart = useSelector(selectCartTotalItems);

  return (
    <div>
      <div className="cart-count">Total items in your shopping cart: {totalItemsInCart}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - R{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: R{total.toFixed(2)}</p>
    </div>
  );
}
