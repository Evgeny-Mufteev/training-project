import { PostsActionsType, UsersActionsType } from "./actions";
import { ActionsType, ReducerType } from "./types";

const initialSate: ReducerType = {
  posts: [],
  user: { lastName: "", firstName: "" },
};

const reducer = (state = initialSate, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionsType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };
    case UsersActionsType.userRegistration:
      return {
        ...state,
        user: action.payload,
      };
    case UsersActionsType.userLogout:
      return {
        ...state,
        user: initialSate.user,
      };
    default:
      return state;
  }
};

export default reducer;
