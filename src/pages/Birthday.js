import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import WishListItem from "../components/WishListItem";

export default function Birthday() {
  const birthdayWishes = useSelector((state) => state.birthdayList);

  return (
    <div>
      <ul>
        {birthdayWishes.map(({ id, wish }) => {
          return <WishListItem id={id} wish={wish} />;
        })}
      </ul>
      <Navigation />
    </div>
  );
}
