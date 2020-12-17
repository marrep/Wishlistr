const birthdayList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BIRTHDAY":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export { birthdayList };
