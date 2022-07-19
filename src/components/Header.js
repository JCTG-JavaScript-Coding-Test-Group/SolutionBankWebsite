import styled from "styled-components";
import logoSrc from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Logo src={logoSrc} alt="프로그래머스 정답 통과기"></Logo>

      <TabNavigation>
        <TabList>
          <TabItem>
            <StyledLink to="/">소개</StyledLink>
          </TabItem>
          <TabItem>
            <StyledLink to="/error-report">오류 제보</StyledLink>
          </TabItem>
          <TabItem>
            <StyledLink to="/solution-report">정답 제보</StyledLink>
          </TabItem>
        </TabList>
      </TabNavigation>
    </>
  );
}

const Logo = styled.img`
  display: block;
  width: 16rem;
  height: 16rem;
  margin: 6.9rem auto 0;
`;

// // 1. Tab 메뉴 간격 일치
// const TabList = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   width: 50rem;
//   transform: translatex(3.9rem);
//   margin: 0 auto;
//   font-size: 4rem;
// `;
// const TabItem = styled.li`
//   text-align: center;
// `;

// 2. Tab 메뉴 너비 일치
const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 60rem;
  margin: 0 auto;
  font-size: 3.9rem;
`;
const TabItem = styled.li`
  width: 20rem;
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.notSelectedTab};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &.active {
    color: ${(props) => props.theme.basicWhite};
    font-weight: 700;
  }
`;

const TabNavigation = styled.div`
  margin-top: 6.8rem;
`;
