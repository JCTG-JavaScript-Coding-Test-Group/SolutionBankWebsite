import styled from "styled-components";
import { TextInput } from "../style/styledComponents";
import { useEffect, useState } from "react";
import useSolutionListValue from "../hooks/solutionList/useSolutionListValue";
import { createFuzzyMatcher } from "./utils/createFuzzyMatcher";

const QuestionList = ({ onQuestionNameChange }) => {
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const solutionList = useSolutionListValue();
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    setQuestionList(solutionList);
  }, []);

  useEffect(() => {
    onQuestionNameChange(questionName);
  }, [questionName]);
  function handleQuestionNameInput(e) {
    const inputValue = e.target.value;
    setQuestionName(inputValue);
    const regex = createFuzzyMatcher(inputValue);
    setQuestionList(
      solutionList.filter((solution) => regex.test(solution.name))
    );
    if (!isQuestionListVisible) setIsQuestionListVisible(true);
  }
  function handleQuestionNameBlur(e) {
    setIsQuestionListVisible(false);
  }
  function handleQuestionNameFocus(e) {
    setIsQuestionListVisible(true);
  }
  function handleQuestionClick(e) {
    e.stopPropagation();
    setIsQuestionListVisible(false);
    setQuestionName(e.target.dataset.value);
  }

  return (
    <>
      <TextInput
        id="questionNameInput"
        placeholder="문제 이름을 검색하세요."
        defaultValue={questionName}
        value={questionName}
        onFocus={handleQuestionNameFocus}
        onInput={handleQuestionNameInput}
      />
      {isQuestionListVisible && (
        <Wrapper id="questionsList">
          {questionList.map((value, index) => (
            <QuestionItem key={value.name + index}>
              <QuestionBtn
                onClick={handleQuestionClick}
                data-value={value.name}
              >
                {value.name} / Level {value.level}
              </QuestionBtn>
            </QuestionItem>
          ))}
        </Wrapper>
      )}
    </>
  );
};
export default QuestionList;
export const Wrapper = styled.ul`
  //display: none;
  position: absolute;
  top: 20rem;
  left: 0;
  width: 100%;
  height: 33.2rem;
  background-color: ${(props) => props.theme.searchBg};
  overflow: scroll;
  z-index: 10;
`;
export const QuestionItem = styled.li``;

export const QuestionBtn = styled.div`
  width: 100%;
  height: 9rem;
  text-align: left;
  line-height: 9rem;
  text-indent: 2rem;
  background-color: transparent;
  font-size: 3.1rem;
  color: ${(props) => props.theme.basicWhite};
  border-bottom: 1px solid ${(props) => props.theme.notSelectedTab};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.programmersBlue};
  }
`;
