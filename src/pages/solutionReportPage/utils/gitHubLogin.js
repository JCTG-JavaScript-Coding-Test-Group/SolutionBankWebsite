export const LOGIN_URL =
  "https://github.com/login/oauth/authorize?client_id=" +
  process.env.REACT_APP_CLIENT_ID;

export const requestAccessTokenAPI = async (code) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};
export const requestLoginAPI = async (access_token) => {
  try {
    const userInfo = await fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${access_token}`,
      },
    });
    return userInfo.json();
  } catch (e) {
    console.log(e);
  }
};
