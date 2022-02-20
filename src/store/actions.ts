import { PostsDataType } from "../assets/data";
import { UserType } from "./types";

/* eslint-disable no-unused-vars */
export enum PostsActionsType {
  fetchPostsData = "FETCH_POST_DATA",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionsType.fetchPostsData,
    payload: data,
  };
};

export enum UsersActionsType {
  userRegistration = "USER_REGISTRATION",
  userLogout = "USER_LOGOUT",
}

export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastName: user.lastName.toLocaleLowerCase,
    firstName: user.firstName.toLocaleLowerCase,
  };
  return {
    type: UsersActionsType.userRegistration,
    payload: editUser,
  };
};

export const userLogoutAction = () => {
  return {
    type: UsersActionsType.userLogout,
  };
};
