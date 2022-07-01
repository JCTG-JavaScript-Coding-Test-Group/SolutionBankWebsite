// import qs from "qs";
import axios from "axios";
import { useState } from "react";

export default function GitHubLogin() {
  const REST_API_KEY = "497a08df8fa6b9f4dc7f";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get("code");

  let local = localStorage.getItem("token");

  let [userName, setUserName] = useState();
  let [avatar, setAvatar] = useState();

  const limitToken = "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";
  const getAccessToken = async () => {
    const baseUrl = "https://github.com/login/oauth/access_token";
    const config = {
      client_id: "497a08df8fa6b9f4dc7f",
      client_secret: "4e596b7fd2f4825e0523d5fea7de246b4fa59cd1",
      code: authorizationCode,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    const tokenRequest = await (
      await fetch(finalUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      })
    ).json();
    localStorage.setItem("token", tokenRequest.access_token);
    // getGitHubUserInfo();
    return tokenRequest;
  };

  const getGitHubUserInfo = async () => {
    const response = await axios.get("https://api.github.com/user", {
      headers: {
        authorization: `token ${local}`, // 토큰 명시 필수!!!
      },
    });
    return response;
  };

  return (
    <div className="gitHubLogin">
      <span>기여자 등록: </span>
      <a
        href={AUTH_URL}
        onClick={async () => {
          getAccessToken().then((response) => {
            console.log(response);
          });
          // getGitHubUserInfo().then((response) => {
          //   setUserName(response.data.name);
          //   setAvatar(response.data.avatar_url);
          //   console.log(userName);
          //   console.log(avatar);
          // });
        }}
      >
        <button id="gitHubLoginBtn">GitHub 로그인</button>
        <div>유저이름 : {userName}</div>
        <div>
          프로필사진 :
          {!avatar ? (
            ""
          ) : (
            <img
              style={{ width: "50px" }}
              className="phoneImage"
              alt="iPhone_01"
              src={avatar}
            />
          )}
        </div>
      </a>
    </div>
  );
}
