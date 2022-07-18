import styled from "styled-components";
import Header from "../../components/Header";

export default function Introduction() {
  return (
    <>
      <Header />

      <Title>프로그래머스 정답 통과기</Title>

      <IntroductionMsg>
        프로그래머스 코딩 테스트 연습을 통과하고 싶으신가요?
        <br />
        아래의 다운로드 버튼을 눌러 설치해보세요!
      </IntroductionMsg>

      <DownloadBtn>다운로드</DownloadBtn>
    </>
  );
}

const Title = styled.h1`
  margin-top: 28.3rem;
  margin-bottom: 5.4rem;
  font-size: 9.6rem;
  font-weight: 900;
  text-align: center;
`;

const IntroductionMsg = styled.p`
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;
`;

const DownloadBtn = styled.button`
  display: block;
  width: 51rem;
  height: 13rem;
  margin: 15.7rem auto 0;
  background-color: ${(props) => props.theme.programmersBlue};
  border-radius: 2.1rem;
  font-size: 5.2rem;
  color: ${(props) => props.theme.basicWhite};
  cursor: pointer;
`;
