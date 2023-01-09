import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { open } from "../features/modal/ModalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        {cartItems.length === 0 ? null : (
          <button className="btn clear-btn" onClick={() => dispatch(open())}>
            clear cart
          </button>
        )}
      </footer>
    </section>
  );
};

export default CartContainer;
