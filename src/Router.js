import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introductionPage/Introduction";
import ErrorReport from "./pages/errorReportPage/ErrorReport";
import SolutionReport from "./pages/solutionReportPage/SolutionReport";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/error-report" element={<ErrorReport />}></Route>
        <Route path="/solution-report" element={<SolutionReport />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
