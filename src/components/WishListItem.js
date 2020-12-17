import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWish } from "../actions/removeWish";
import { addToBirthday } from "../actions/addToBirthday";
import { addToChristmas } from "../actions/addToChristmas";

export default function WishListItem({ id, wish }) {
  const wishState = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{wish}</h2>
      <button onClick={() => moveWish(addToBirthday, id)}>
        wish for birthday
      </button>
      <button onClick={() => moveWish(addToChristmas, id)}>
        wish for christmas
      </button>
      <button onClick={() => dispatch(removeWish(id))}>
        remove this wish...
      </button>
    </div>
  );

  function moveWish(handleWish, id) {
    const movedWish = wishState.filter((wish) => wish.id === id);
    dispatch(handleWish(movedWish));
    dispatch(removeWish(id));
  }
}
