import {
  requestAccessTokenAPI,
  requestLoginAPI,
} from "../../pages/solutionReportPage/utils/gitHubLogin";
import useSetUser from "./useSetUser";
import { useState } from "react";
import useUserValue from "./useUserValue";

const useUserLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = useUserValue();
  const setUserInfo = useSetUser();
  const requestLogin = (code) => {
    requestAccessTokenAPI(code)
      .then((response) => requestLoginAPI(response.access_token))
      .then((response) => {
        if (response.hasOwnProperty("login")) {
          setIsLoggedIn(true);
          setUserInfo(response);
        }
        if (userInfo) setIsLoggedIn(true);
      });
  };
  return { isLoggedIn, requestLogin };
};
export default useUserLogin;
