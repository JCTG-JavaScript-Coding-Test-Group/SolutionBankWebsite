export const LOGIN_URL =
  "https://github.com/login/oauth/authorize?client_id=" +
  process.env.REACT_APP_CLIENT_ID;

export const requestAccessToken = async (code) => {
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const response = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );
  return response.json();
};
export const requestLogin = async (access_token) => {
  const userInfo = await fetch("https://api.github.com/user", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `token ${access_token}`,
    },
  });
  return userInfo.json();
};
