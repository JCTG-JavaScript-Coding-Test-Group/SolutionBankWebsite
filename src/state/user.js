import { atom } from "recoil";
import { sessionStorageEffect } from "./utils/sessionStorageEffect";

const userState = atom({
  key: "userState",
  default: {},
  effects: [sessionStorageEffect("userState")],
});
export default userState;

const userObject = {
  avatar_url: "https://avatars.githubusercontent.com/u/54318460?v=4",
  bio: null,
  blog: "",
  company: null,
  created_at: "2019-08-20T13:16:15Z",
  email: "codeisneverodd@gmail.com",
  events_url: "https://api.github.com/users/codeisneverodd/events{/privacy}",
  followers: 73,
  followers_url: "https://api.github.com/users/codeisneverodd/followers",
  following: 168,
  following_url:
    "https://api.github.com/users/codeisneverodd/following{/other_user}",
  gists_url: "https://api.github.com/users/codeisneverodd/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/codeisneverodd",
  id: 54318460,
  location: null,
  login: "codeisneverodd",
  name: "codeisneverodd",
  node_id: "MDQ6VXNlcjU0MzE4NDYw",
  organizations_url: "https://api.github.com/users/codeisneverodd/orgs",
  public_gists: 1,
  public_repos: 9,
  received_events_url:
    "https://api.github.com/users/codeisneverodd/received_events",
  repos_url: "https://api.github.com/users/codeisneverodd/repos",
  site_admin: false,
  starred_url:
    "https://api.github.com/users/codeisneverodd/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/codeisneverodd/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2022-07-15T04:07:10Z",
  url: "https://api.github.com/users/codeisneverodd",
};
