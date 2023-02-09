import React from "react";
import { CartItems } from "../../contexts/CartContext";
function CartItem(props) {
  const { RemoveItem, change_q } = CartItems();
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={props.url}
          alt={props.name}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {props.name}
              </h3>
              <p className="text-sm dark:text-gray-400">{props.date}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                {props.price * props.q + "$"}{" "}
              </p>
              {/* <p className="text-sm line-through dark:text-gray-600">600€</p> */}
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              onClick={() => {
                RemoveItem(props.name, props.price, props.q);
              }}
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            <select
              value={props.q}
              aria-label="Select quantity"
              className=" ml-20 py-2 px-1 rounded-lg   border-solid border-blue-500 border-2 mr-2  "
              // defaultValue={props.q}
              onChange={(e) => {
                change_q(props.name, e.target.value);
                console.log("selected " + e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
