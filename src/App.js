import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculatePrice } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
