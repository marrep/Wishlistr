import { birthdayList } from "./birthdayList";
import { christmasList } from "./christmasList";
import { wishList } from "./wishList";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  birthdayList,
  christmasList,
  wishList,
});
