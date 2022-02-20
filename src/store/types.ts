import { PostsDataType } from "../assets/data";
import { PostsActionsType, UsersActionsType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: PostsDataType;
};

type userRegistrationActionType = {
  type: UsersActionsType.userRegistration;
  payload: UserType;
};

type userLogoutActionType = {
  type: UsersActionsType.userLogout;
};

export type ActionsType =
  | FetchPostsDataActionType
  | userRegistrationActionType
  | userLogoutActionType;
