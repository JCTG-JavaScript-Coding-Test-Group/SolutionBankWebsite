import { useEffect, useState } from "react";
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
import gitHubLogoSrc from "../../images/github-logo-white.png";
import { useSearchParams } from "react-router-dom";
import {
  LOGIN_URL,
  requestAccessToken,
  requestLogin,
} from "./utils/gitHubLogin";

export default function SolutionReport() {
  const [submitted, setSubmitted] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (searchParams.get("code")) {
      const code = searchParams.get("code");
      requestAccessToken(code)
        .then((response) => requestLogin(response.access_token))
        .then((response) => {
          setUserInfo(response);
          console.log(response);
        });
    }
  }, [searchParams]);
  const handleGitHubLogin = async () => {};
  const isDetailContentVisible = questionName !== "";
  const isSubmitBtnDisabled = detailContent === "";

  function handleOtherSolutionBtnClick() {
    console.log("!");
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

  return (
    <>
      <Header />

      {submitted ? (
        <>
          <ThanksMsg>제보해주셔서 감사합니다.</ThanksMsg>
          <OtherReportBtn onClick={handleOtherSolutionBtnClick}>
            다른 정답 제보
          </OtherReportBtn>
        </>
      ) : (
        <MainContetnWrapper>
          <StepByStepInputItem>
            <InputLabel>문제 이름</InputLabel>
            <TextInput
              id="questionNameInput"
              placeholder="문제 이름을 검색하세요."
              defaultValue={questionName}
              onInput={handleQuestionNameInput}
            />
            {/*<QuestionList id="questionsList">*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>1번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>2번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>3번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>4번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>5번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>6번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>7번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*  <QuestionItem>*/}
            {/*    <QuestionBtn>8번문제</QuestionBtn>*/}
            {/*  </QuestionItem>*/}
            {/*</QuestionList>*/}
          </StepByStepInputItem>

          {/*isDetailContentVisible &&*/}
          {
            <>
              <StepByStepInputItem>
                <InputLabel>기여자 등록</InputLabel>
                {userInfo.hasOwnProperty("avatar_url") ? (
                  <UserInfo></UserInfo>
                ) : (
                  <a href={LOGIN_URL}>
                    <GitHubLoginBtn
                      id="gitHubLoginBtn"
                      onClick={handleGitHubLogin}
                    >
                      GitHub 로그인
                    </GitHubLoginBtn>
                  </a>
                )}
              </StepByStepInputItem>
              <StepByStepInputItem>
                <InputLabel>내용</InputLabel>
                {/* <Msg>현재는 JavaScript 코드만 제출 가능해요</Msg> */}
                <TextArea
                  rows="20"
                  cols="100"
                  onInput={handleDetailContentInput}
                  defaultValue={detailContent}
                />
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
          }
        </MainContetnWrapper>
      )}
    </>
  );
}

const GitHubLoginBtn = styled.button`
  width: 100%;
  height: 13rem;
  border: none;
  border-radius: 2rem;
  color: ${(props) => props.theme.basicWhite};
  font-size: 4.4rem;
  text-indent: 15rem;
  background-color: ${(props) => props.theme.notSelectedCategory};
  background-image: url(${gitHubLogoSrc});
  background-size: 7rem;
  background-position: 23rem;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Msg = styled.span`
  color: ${(props) => props.theme.programmersBlue};
`;
const UserInfo = styled.div``;
