// pages에서 공통적으로 사용되는 부분을 위한 임시 파일입니다.
// 컴포넌트화를 거친 후 삭제될 파일입니다.

import styled from "styled-components";

export const ThanksMsg = styled.p`
  margin-top: 20rem;
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;
`;

export const OtherReportBtn = styled.button`
  display: block;
  margin: 15.7rem auto;
  width: 51rem;
  height: 13rem;
  background-color: ${(props) => props.theme.programmersBlue};
  border: none;
  border-radius: 2.1rem;
  font-size: 5.2rem;
  color: ${(props) => props.theme.basicWhite};
  cursor: pointer;
`;

export const MainContetnWrapper = styled.div`
  width: 86rem;
  margin: 12.2rem auto 0;
`;

export const StepByStepInputItem = styled.div`
  position: relative;
  margin-top: 6.4rem;
`;

export const InputLabel = styled.p`
  margin-bottom: 4.4rem;
  font-size: 5.6rem;
  font-weight: 700;
`;

export const TextInput = styled.input`
  style: none;
  width: 86rem;
  height: 8.5rem;
  font-size: 3.1rem;
  text-indent: 2rem;
  border: 0;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 13rem;
  border: none;
  border-radius: 2rem;
  color: ${(props) => props.theme.basicWhite};
  font-size: 5.2rem;
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledBtn : props.theme.programmersBlue};
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 3.1rem;
`;
