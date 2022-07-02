import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Introduction from "./Tabs/Introduction";
import ErrorReport from "./Tabs/ErrorReport";
import SolutionReport from "./Tabs/SolutionReport";

import LoginStart from "./Tabs/LoginStart";

// const getAccessToken = async () => {
//   const baseUrl = "https://github.com/login/oauth/access_token";
//   const config = {
//     client_id: "497a08df8fa6b9f4dc7f",
//     client_secret: "4e596b7fd2f4825e0523d5fea7de246b4fa59cd1",
//     code: authorizationCode,
//   };
//   const params = new URLSearchParams(config).toString();
//   const finalUrl = `${baseUrl}?${params}`;
//   const tokenRequest = await (
//     await fetch(finalUrl, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//   ).json();
//   // localStorage.setItem("token", tokenRequest.access_token);
//   // return tokenRequest;
//   if ("access_token" in tokenRequest) {
//     const { access_token } = tokenRequest;
//     const userData = await (
//       await fetch("https://api.github.com/user", {
//         headers: {
//           Authorization: `token ${access_token}`,
//         },
//       })
//     ).json();
//     return userData;
//   }
// };

export default function Contents() {
  return (
    <BrowserRouter>
      <TabList>
        <TabItem>
          <Link to="/">소개</Link>
        </TabItem>
        <TabItem>
          <Link to="/error-report">오류 제보</Link>
        </TabItem>
        <TabItem>
          <Link to="/solution-report">정답 제보</Link>
        </TabItem>
      </TabList>
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/error-report" element={<ErrorReport />}></Route>
        <Route path="/solution-report" element={<SolutionReport />}></Route>
        <Route path="/solution-report/*" element={<SolutionReport />}></Route>
        {/* <Route path="/solution-report/*" element={<LoginStart />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const TabList = styled.ul``;

const TabItem = styled.li``;
