import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import WishListItem from "../components/WishListItem";

export default function Christmas() {
  const christmasWishes = useSelector((state) => state.christmasList);

  return (
    <div>
      <ul>
        {christmasWishes.map(({ id, wish }) => {
          return <WishListItem id={id} wish={wish} />;
        })}
      </ul>
      <Navigation />
    </div>
  );
}
