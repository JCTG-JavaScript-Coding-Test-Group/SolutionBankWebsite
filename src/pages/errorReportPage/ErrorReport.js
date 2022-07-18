import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import {
  ThanksMsg,
  OtherReportBtn,
  MainContetnWrapper,
  StepByStepInputItem,
  InputLabel,
  TextInput,
  QuestionList,
  QuestionItem,
  QuestionBtn,
  TextArea,
  SubmitBtn,
} from "../../style/styledComponents";

export default function ErrorReport() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCategory, setErrorCategory] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");

  const isQuestionNameVisible = errorCategory !== "" && errorCategory !== "error-notCopied";
  const isDetailContentVisible =
    errorCategory !== "" && (errorCategory !== "error-wrongAnswer" || questionName !== "");
  const isSubmitBtnDisabled = errorCategory === "error-other" && detailContent === "";

  function handleOtherErrorBtnClick() {
    setSubmitted(false);
    setErrorCategory("");
    setQuestionName("");
    setDetailContent("");
  }

  function handleErrorCategoryClick(e) {
    setErrorCategory(e.target.id);
  }

  function handleQuestionNameInput(e) {
    setQuestionName(e.target.value);
  }

  function handleDetailContentInput(e) {
    setDetailContent(e.target.value);
  }

  function handleSubmitBtnClick() {
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      {submitted ? (
        <>
          <ThanksMsg>제보해주셔서 감사합니다.</ThanksMsg>
          <OtherReportBtn onClick={handleOtherErrorBtnClick}>다른 오류 제보</OtherReportBtn>
        </>
      ) : (
        <MainContetnWrapper>
          <StepByStepInputItem>
            <InputLabel>오류 유형</InputLabel>
            <RadioInputWrapper>
              <Label htmlFor="error-wrongAnswer" clicked={errorCategory === "error-wrongAnswer"}>
                정답 통과가 안돼요
              </Label>
              <RadioInput
                type="radio"
                id="error-wrongAnswer"
                name="errorCategory"
                onClick={handleErrorCategoryClick}
              />
              <Label htmlFor="error-notCopied" clicked={errorCategory === "error-notCopied"}>
                코드 복사가 안돼요
              </Label>
              <RadioInput
                type="radio"
                id="error-notCopied"
                name="errorCategory"
                onClick={handleErrorCategoryClick}
              />
              <Label htmlFor="error-other" clicked={errorCategory === "error-other"}>
                기타
              </Label>
              <RadioInput
                type="radio"
                id="error-other"
                name="errorCategory"
                onClick={handleErrorCategoryClick}
              />
            </RadioInputWrapper>
          </StepByStepInputItem>

          {isQuestionNameVisible && (
            <StepByStepInputItem>
              <InputLabel>문제 이름</InputLabel>
              <TextInput
                id="questionNameInput"
                placeholder="문제 이름을 검색하세요."
                defaultValue={questionName}
                onInput={handleQuestionNameInput}
              ></TextInput>
              <QuestionList id="questionsList">
                <QuestionItem>
                  <QuestionBtn>1번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>2번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>3번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>4번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>5번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>6번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>7번문제</QuestionBtn>
                </QuestionItem>
                <QuestionItem>
                  <QuestionBtn>8번문제</QuestionBtn>
                </QuestionItem>
              </QuestionList>
            </StepByStepInputItem>
          )}

          {isDetailContentVisible && (
            <>
              <StepByStepInputItem>
                <InputLabel>내용</InputLabel>
                <TextArea
                  rows="10"
                  cols="100"
                  onInput={handleDetailContentInput}
                  defaultValue={detailContent}
                ></TextArea>
              </StepByStepInputItem>

              <StepByStepInputItem>
                <SubmitBtn
                  id="submitBtn"
                  disabled={isSubmitBtnDisabled}
                  onClick={handleSubmitBtnClick}
                >
                  제출
                </SubmitBtn>
              </StepByStepInputItem>
            </>
          )}
        </MainContetnWrapper>
      )}
    </>
  );
}

const RadioInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  height: 8.5rem;
  padding: 0 5rem;
  line-height: 8.5rem;
  font-size: 3.1rem;
  cursor: pointer;
  border-radius: 1.4rem;
  background-color: ${(props) =>
    props.clicked ? props.theme.programmersBlue : props.theme.notSelectedTab};
`;

const RadioInput = styled.input`
  display: none;
`;
