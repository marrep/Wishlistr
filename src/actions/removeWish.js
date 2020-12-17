const removeWish = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};

export { removeWish };
