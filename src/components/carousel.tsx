import styled from "styled-components";
interface CarouselProps {
  carouselList: string[];
}
const Carousel = ({ carouselList }: CarouselProps) => {
  return (
    <CarouselContainer>
      {carouselList?.map((img, idx) => (
        <img key={idx} src={img} alt={`${img}-${idx}`} />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
`;
