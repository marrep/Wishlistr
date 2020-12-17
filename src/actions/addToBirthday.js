const addToBirthday = (wish) => {
  return {
    type: "ADD_TO_BIRTHDAY",
    payload: wish,
  };
};

export { addToBirthday };
