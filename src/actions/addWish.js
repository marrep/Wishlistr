const addWish = (wish) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: wish,
  };
};

export { addWish };
