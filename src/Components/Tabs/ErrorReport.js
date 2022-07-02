import { useState } from "react";
import {
  TabWrapper,
  BlockText,
  Button,
  StepByStepInputItem,
  InlineText,
  RadioInput,
  Label,
  TextInput,
  DataList,
  Option,
  TextArea,
} from "./Style/StyledComponent";

export default function ErrorReport() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCategory, setErrorCategory] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");

  const isQuestionNameUnvisible =
    errorCategory === "" || errorCategory === "error-notCopied";
  const isDetailContentUnvisible =
    errorCategory === "" ||
    (errorCategory === "error-wrongAnswer" && questionName === "");
  const isSubmitBtnDisabled =
    errorCategory === "error-other" && detailContent === "";

  function handleOtherErrorBtnClick() {
    setSubmitted(!submitted);
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
    setSubmitted(!submitted);
  }

  function handleSubmitAlert() {
    alert("제출완료! 감사합니다");
  }

  return submitted ? (
    <TabWrapper>
      <BlockText>제보해주셔서 감사합니다.</BlockText>
      <Button onClick={handleOtherErrorBtnClick}>다른 오류 제보</Button>
    </TabWrapper>
  ) : (
    <TabWrapper
      method="POST"
      action="https://script.google.com/macros/s/AKfycbym87G4wkX6PLLL9zUafJ7_2zfqJifBDZDnN7RCFftRcmS4GTp9J2O6mSZPNZmd5pCU/exec"
      target="blankifr"
      // onSubmit={handleSubmitBtnClick}
    >
      <StepByStepInputItem>
        <InlineText>오류 유형: </InlineText>
        <RadioInput
          type="radio"
          id="error-wrongAnswer"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
          value="정답 통과가 안돼요"
        />
        <Label htmlFor="error-wrongAnswer">정답 통과가 안돼요</Label>
        <RadioInput
          type="radio"
          id="error-notCopied"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
          value="코드 복사가 안돼요"
        />
        <Label htmlFor="error-notCopied">코드 복사가 안돼요</Label>
        <RadioInput
          type="radio"
          id="error-other"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
          value="기타"
        />
        <Label htmlFor="error-other">기타</Label>
      </StepByStepInputItem>

      {isQuestionNameUnvisible ? null : (
        <StepByStepInputItem>
          <InlineText>문제 이름: </InlineText>
          <TextInput
            list="questionName"
            name="Question"
            onInput={handleQuestionNameInput}
            defaultValue={questionName}
          />
          <DataList id="questionName" name="question">
            <Option value="1번문제" />
            <Option value="2번문제" />
            <Option value="3번문제" />
          </DataList>
        </StepByStepInputItem>
      )}

      {isDetailContentUnvisible ? null : (
        <>
          <StepByStepInputItem>
            <InlineText>내용: </InlineText>
            <TextArea
              rows="20"
              cols="100"
              onInput={handleDetailContentInput}
              defaultValue={detailContent}
              name="Contents"
            ></TextArea>
          </StepByStepInputItem>

          <StepByStepInputItem>
            <Button
              type="submit"
              id="submitBtn"
              disabled={isSubmitBtnDisabled}
              onClick={handleSubmitAlert}
              // onClick={handleSubmitBtnClick}
            >
              제출
            </Button>
          </StepByStepInputItem>
        </>
      )}
      <iframe name="blankifr" style={{ display: "none" }}></iframe>
    </TabWrapper>
  );
}
