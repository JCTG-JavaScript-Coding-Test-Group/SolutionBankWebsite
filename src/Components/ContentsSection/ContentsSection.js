import { useRecoilValue } from "recoil";
import { tabNoState } from "../../recoil/atom";

import ErrorReportTab from "./ErrorReport/ErrorReportTab";
import IntroductionTab from "./Introduction/IntroductionTab";
import SolutionReportTab from "./SolutionReport/SolutionReportTab";

export default function ContentsSection() {
  const tabNo = useRecoilValue(tabNoState);

  const tabs = {
    0: <IntroductionTab />,
    1: <ErrorReportTab />,
    2: <SolutionReportTab />,
  };

  return <div>{tabs[tabNo]}</div>;
}
