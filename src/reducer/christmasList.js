const christmasList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CHRISTMAS":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export { christmasList };
