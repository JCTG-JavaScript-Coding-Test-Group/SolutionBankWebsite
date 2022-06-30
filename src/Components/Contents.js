import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Introduction from "./Tabs/Introduction/Introduction";
import ErrorReport from "./Tabs/ErrorReport/ErrorReport";
import SolutionReport from "./Tabs/SolutionReport/SolutionReport";

export default function TabNavigation() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">소개</Link>
        </li>
        <li>
          <Link to="/error-report">오류 제보</Link>
        </li>
        <li>
          <Link to="/solution-report">정답 제보</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/error-report" element={<ErrorReport />}></Route>
        <Route path="/solution-report" element={<SolutionReport />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
