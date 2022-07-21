import { useSetRecoilState } from "recoil";
import solutionListState from "../../state/solutionList";

const useSetSolutionList = () => {
  return useSetRecoilState(solutionListState);
};
export default useSetSolutionList;
