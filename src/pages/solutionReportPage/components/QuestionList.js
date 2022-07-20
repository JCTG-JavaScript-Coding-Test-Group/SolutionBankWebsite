import styled from "styled-components";
import { TextInput } from "../../../style/styledComponents";
import { useState } from "react";

const QuestionList = () => {
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(false);
  const [questionName, setQuestionName] = useState("");
  function handleQuestionClick(e) {
    setIsQuestionListVisible(false);
    setQuestionName(e.target.dataset.value);
  }
  function handleQuestionNameInput(e) {
    setQuestionName(e.target.value);
    if (!isQuestionListVisible) setIsQuestionListVisible(true);
  }

  return (
    <>
      <TextInput
        id="questionNameInput"
        placeholder="문제 이름을 검색하세요."
        defaultValue={questionName}
        value={questionName}
        onInput={handleQuestionNameInput}
      />
      {isQuestionListVisible && (
        <Wrapper id="questionsList">
          {[1, 2, 3, 4, 5].map((value) => (
            <QuestionItem key={value}>
              <QuestionBtn
                onClick={handleQuestionClick}
                data-value={`${value}번 문제`}
              >
                {value}번 문제
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
