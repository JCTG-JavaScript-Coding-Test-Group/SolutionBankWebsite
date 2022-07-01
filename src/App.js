import styled from "styled-components";

import Contents from "./Components/Contents";

export default function App() {
  return (
    <>
      <Title>🤖 프로그래머스 JS 정답 통과기</Title>
      <Contents />
    </>
  );
}

const Title = styled.h1``;
