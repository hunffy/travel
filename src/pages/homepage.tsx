import styled from "styled-components";
import Carousel from "../components/carousel";
const Homepage = () => {
  return (
    <Container>
      <p>메인페이지</p>
      <Carousel />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
