import { useRecoilValue } from "recoil";
import solutionListState from "../../state/solutionList";

const useSolutionListValue = () => {
  return useRecoilValue(solutionListState);
};
export default useSolutionListValue;
