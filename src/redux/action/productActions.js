import { ActionTypes } from "../contants/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};
export const setProductsError = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT_ERROR,
    payload: "error",
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: products,
  };
};
export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECT_PRODUCT,
  };
};
