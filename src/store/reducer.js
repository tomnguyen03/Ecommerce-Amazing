import { SET_PARAMS } from "./constants";

const initState = {
  params: {},
};

function reducer(state, action) {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        params: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
