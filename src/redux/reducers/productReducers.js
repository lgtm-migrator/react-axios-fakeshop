import { ActionTypes } from "../constants/actions-types";

const initialState = {
  product: [
    {
      id: 1,
      title: "palestine",
      category: "Freedom",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

// export default productReducer;
