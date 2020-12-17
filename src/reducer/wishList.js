import { v4 as uuidv4 } from "uuid";

const wishList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [
        ...state,
        {
          id: uuidv4(),
          wish: action.payload,
          removed: false,
        },
      ];
    case "REMOVE_FROM_WISHLIST":
      return state.filter((wish) => wish.id !== action.payload);
    default:
      return state;
  }
};

export { wishList };
