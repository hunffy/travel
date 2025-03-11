import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderNav>
      <LogoSection
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo>로고</Logo>
      </LogoSection>
      <HeaderNavList>
        <HeaderItem>홈</HeaderItem>
        <HeaderItem>테마</HeaderItem>
        <HeaderItem>지역</HeaderItem>
        <HeaderItem>여행코스</HeaderItem>
        <HeaderItem>여행정보</HeaderItem>
        <HeaderItem>여행혜택</HeaderItem>
      </HeaderNavList>
      <InfoSection>
        <InfoItem>검색</InfoItem>
        <InfoItem>지도</InfoItem>
        <InfoItem>마이</InfoItem>
        <InfoItem>언어</InfoItem>
      </InfoSection>
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.div`
  width: 100%;
  height: 90px;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const LogoSection = styled.div`
  width: 20%;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div``;

const HeaderNavList = styled.ul`
  width: 60%;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const HeaderItem = styled.li`
  display: inline;
  &:hover {
    background-color: skyblue;
    color: white;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const InfoSection = styled.div`
  width: 20%;
`;

const InfoItem = styled.li`
  display: inline;
  margin: 10px;
  &:hover {
    background-color: skyblue;
    color: white;
    cursor: pointer;
    text-decoration: underline;
  }
`;
