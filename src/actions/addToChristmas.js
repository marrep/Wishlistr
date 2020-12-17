const addToChristmas = (wish) => {
  return {
    type: "ADD_TO_CHRISTMAS",
    payload: wish,
  };
};

export { addToChristmas };
