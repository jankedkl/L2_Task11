// components/CartCount.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../store/StoreSlice";

const CartCount = () => {
  const totalItemsInCart = useSelector(selectCartTotalItems);

  return (
    <Link className="cart-count" to="/cart">
      Total items in your shopping cart: {totalItemsInCart}
    </Link>
  );
};

export default CartCount;