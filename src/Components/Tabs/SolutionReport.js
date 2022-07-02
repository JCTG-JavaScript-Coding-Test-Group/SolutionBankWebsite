import { useState } from "react";
import styled from "styled-components";

import {
  TabWrapper,
  BlockText,
  Button,
  StepByStepInputItem,
  InlineText,
  TextInput,
  DataList,
  Option,
  TextArea,
} from "./Style/StyledComponent";

export default function SolutionReport() {
  const [submitted, setSubmitted] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");

  const isDetailContentVisible = questionName !== "";
  const isSubmitBtnDisabled = detailContent === "";

  function handleOtherSolutionBtnClick() {
    setSubmitted(false);
    setQuestionName("");
    setDetailContent("");
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

  return submitted ? (
    <TabWrapper>
      <BlockText>제보해주셔서 감사합니다.</BlockText>
      <Button onClick={handleOtherSolutionBtnClick}>다른 정답 제보</Button>
    </TabWrapper>
  ) : (
    <TabWrapper>
      <StepByStepInputItem>
        <InlineText>문제 이름: </InlineText>
        <TextInput
          list="questionName"
          name="question"
          onInput={handleQuestionNameInput}
          defaultValue={questionName}
        />
        <DataList id="questionName">
          <Option value="1번문제" />
          <Option value="2번문제" />
          <Option value="3번문제" />
        </DataList>
      </StepByStepInputItem>

      {isDetailContentVisible && (
        <>
          <StepByStepInputItem>
            <InlineText>기여자 등록: </InlineText>
            <GitHubLoginBtn id="gitHubLoginBtn">GitHub 로그인</GitHubLoginBtn>
          </StepByStepInputItem>
          <StepByStepInputItem>
            <InlineText>내용: </InlineText>
            <TextArea
              rows="20"
              cols="100"
              onInput={handleDetailContentInput}
              defaultValue={detailContent}
            ></TextArea>
          </StepByStepInputItem>

          <StepByStepInputItem>
            <Button id="submitBtn" disabled={isSubmitBtnDisabled} onClick={handleSubmitBtnClick}>
              제출
            </Button>
          </StepByStepInputItem>
        </>
      )}
    </TabWrapper>
  );
}

const GitHubLoginBtn = styled.button``;
