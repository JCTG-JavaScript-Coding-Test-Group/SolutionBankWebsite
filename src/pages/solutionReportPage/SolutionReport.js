import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import {
  InputLabel,
  MainContetnWrapper,
  OtherReportBtn,
  StepByStepInputItem,
  SubmitBtn,
  TextArea,
  ThanksMsg,
} from "../../style/styledComponents";
import gitHubLogoSrc from "../../images/github-logo-white.png";
import { useSearchParams } from "react-router-dom";
import { LOGIN_URL } from "./utils/gitHubLogin";
import useUserProfile from "../../hooks/user/useUserProfile";
import useUserLogin from "../../hooks/user/useUserLogin";
import QuestionInputAndList from "../../components/QuestionInputAndList";
import useFetchSolutionList from "../../hooks/solutionList/useFetchSolutionList";
import useSetSolutionList from "../../hooks/solutionList/useSetSolutionList";

export default function SolutionReport() {
  const [submitted, setSubmitted] = useState(false);
  const [detailContent, setDetailContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const userInfo = useUserProfile();
  const { isLoggedIn, requestLogin } = useUserLogin();
  const fetchSolutionList = useFetchSolutionList();
  const setSolutionList = useSetSolutionList();
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (isFetched) fetchSolutionList();
    setIsFetched(true);
  }, [isFetched, setIsFetched, fetchSolutionList]);

  useEffect(() => {
    if (searchParams.get("code")) {
      const code = searchParams.get("code");
      requestLogin(code);
    }
  }, [searchParams]);
  const handleGitHubLogin = async () => {};
  // const isDetailContentVisible = questionName !== "";
  const isSubmitBtnDisabled = detailContent === "";

  function handleOtherSolutionBtnClick() {
    setSubmitted(false);
    // setQuestionName("");
    setDetailContent("");
  }

  function handleDetailContentInput(e) {
    setDetailContent(e.target.value);
  }

  function handleSubmitBtnClick() {
    setSubmitted(true);
  }
  function handleQuestionNameChange(e) {
    console.log(e);
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
            <QuestionInputAndList
              onQuestionNameChange={handleQuestionNameChange}
            />
          </StepByStepInputItem>

          {/*isDetailContentVisible &&*/}
          {
            <>
              <StepByStepInputItem>
                <InputLabel>기여자 등록</InputLabel>
                {isLoggedIn ? (
                  <UserInfo>
                    이름: {userInfo.username}
                    이미지: {userInfo.profileImg}
                  </UserInfo>
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
const UserInfo = styled.div``;
// const Msg = styled.span`
//   color: ${(props) => props.theme.programmersBlue};
// `;
