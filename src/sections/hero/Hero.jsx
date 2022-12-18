import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import styled from "styled-components";
import Slider from "../../components/slider/Slider";
const Section = styled.div`
  position: relative;
  display: flex;
  background-color: var(--lightPinkBackground);
  overflow: hidden;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 1px 20px 0px #f4f0f06c;
  opacity: 0.4;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  z-index: 111;
  :hover {
    opacity: 1;
    box-shadow: 0px 1px 20px 0px #f4f0f03b;
  }
`;

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
      console.log(slide);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
      console.log(slide);
    }
  };

  return (
    <Section>
      <Arrow
        className="arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined fontSize="large" />
      </Arrow>

      <Slider slide={slide} />

      <Arrow className="arrow" direction="right">
        <ArrowRightOutlined
          fontSize="large"
          onClick={() => handleClick("right")}
        />
      </Arrow>
    </Section>
  );
};

export default Hero;
