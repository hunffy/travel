import styled from "styled-components";
import Carousel from "../components/carousel";
import CarouselImg1 from "../assets/img/CarouselImg1.jpeg";
import CarouselImg2 from "../assets/img/CarouselImg2.jpeg";
import CarouselImg3 from "../assets/img/CarouselImg3.jpeg";
const Homepage = () => {
  const CarouselList: string[] = [CarouselImg1, CarouselImg2, CarouselImg3];
  return (
    <Container>
      <p>메인페이지</p>
      <Carousel carouselList={CarouselList} />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
