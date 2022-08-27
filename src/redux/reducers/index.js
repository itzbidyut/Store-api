import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProduct: productReducer,
  product: selectProductReducer,
});
export default reducers;
