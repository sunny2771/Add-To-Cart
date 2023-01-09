import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { close } from "../features/modal/ModalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(close());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            // onClick={() => {
            //   dispatch(closeModal());
            // }}
            onClick={() => {
              dispatch(close());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
