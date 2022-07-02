import { useState } from "react";
import styled from "styled-components";
import GitHubLogin from "./GitHubLogin";

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

  const isDetailContentUnvisible = questionName === "";
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

  function handleSubmitAlert() {
    alert("제출완료! 감사합니다");
  }

  return submitted ? (
    <TabWrapper>
      <BlockText>제보해주셔서 감사합니다.</BlockText>
      <Button onClick={handleOtherSolutionBtnClick}>다른 정답 제보</Button>
    </TabWrapper>
  ) : (
    <TabWrapper
      method="POST"
      action="https://script.google.com/macros/s/AKfycbx_8qTODgn9_c7R38_fJCdQAhkzpX6509qGYqi_ZH55Qd2CrmC2LXPkiQgVI0wWenVz/exec"
      target="blankifr"
    >
      <StepByStepInputItem>
        <InlineText>문제 이름: </InlineText>
        <TextInput
          list="questionName"
          name="Question"
          onInput={handleQuestionNameInput}
          defaultValue={questionName}
        />
        <DataList id="questionName">
          <Option value="1번문제" />
          <Option value="2번문제" />
          <Option value="3번문제" />
        </DataList>
      </StepByStepInputItem>

      {isDetailContentUnvisible ? null : (
        <>
          <StepByStepInputItem>
            <GitHubLogin />
          </StepByStepInputItem>
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

const GitHubLoginBtn = styled.button``;
