const GET_SOLUTION_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;

export const requestSolutionListByLevelAPI = async (level) => {
  const url = GET_SOLUTION_LIST_BASE_URL + `level-${level}`;
  const response = await fetch(url);
  return await response.json();
};
