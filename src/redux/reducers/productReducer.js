import { ActionTypes } from "../contants/action-types";

const productInitialState = {
  product: [],
};

export const productReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECT_PRODUCT:
      return {};
    default:
      return state;
  }
};
