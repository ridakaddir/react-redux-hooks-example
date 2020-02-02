import { ADD_POST } from "../constants/action-types";

const initialState = {
  posts: [{ title: "First title" }]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return { ...state, posts: [...state.posts, action.payload] };
  }
  return state;
}
export default rootReducer;
