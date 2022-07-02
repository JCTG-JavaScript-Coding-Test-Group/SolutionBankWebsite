import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Introduction from "./Tabs/Introduction";
import ErrorReport from "./Tabs/ErrorReport";
import SolutionReport from "./Tabs/SolutionReport";

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
      </Routes>
    </BrowserRouter>
  );
}

const TabList = styled.ul``;

const TabItem = styled.li``;
