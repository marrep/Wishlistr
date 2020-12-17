import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish } from "../actions/addWish";
import Navigation from "../components/Navigation";
import WishListItem from "../components/WishListItem";

export default function App() {
  const [wish, setWish] = useState("");
  const wishes = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        placeholder="what's your wish?"
        name="wishes"
        type="text"
        onChange={handleChange}
      />
      <button type="submit" onClick={(e) => handleNewWish(e)}>
        add wish
      </button>
      <ul>
        {wishes.map(({ id, wish }) => {
          return <WishListItem id={id} wish={wish} />;
        })}
      </ul>
      <Navigation />
    </div>
  );

  function handleChange(event) {
    const newWish = event.target.value;
    setWish(newWish);
  }

  function handleNewWish(e) {
    e.preventDefault();
    dispatch(addWish(wish));
  }
}
