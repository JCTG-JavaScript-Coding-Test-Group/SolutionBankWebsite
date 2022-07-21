import useSetSolutionList from "./useSetSolutionList";
import { requestSolutionListByLevelAPI } from "../../apis/solutionList";

const useFetchSolutionList = () => {
  const setSolutionList = useSetSolutionList();
  const POSSIBLE_LEVEL = [1, 2, 3, 4, 5];

  const fetchSolutionList = async () => {
    setSolutionList([]);
    POSSIBLE_LEVEL.forEach((level) => {
      requestSolutionListByLevelAPI(level).then((response) => {
        const newSolutionList = response
          .filter((solution) => solution.name !== "00-해답-예시.js")
          .map((solution) => ({
            name: formattedFileName(solution.name),
            level,
          }));

        setSolutionList((solutionList) => [
          ...solutionList,
          ...newSolutionList,
        ]);
      });
    });
    setSolutionList((solutionList) =>
      solutionList.sort((a, b) => a.level - b.level)
    );
  };

  return fetchSolutionList;
};
export default useFetchSolutionList;
function formattedFileName(fileName) {
  return fileName.replace(/-/g, " ").replace(".js", "");
}
