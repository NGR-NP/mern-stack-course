import { useEffect, useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";
const LoadingData = {
  images: [
    {
      gif: "/images/loading/loading.gif",
    },
    {
      gif: "/images/loading/loading1.gif",
    },
    {
      gif: "/images/loading/loading2.gif",
    },
    {
      gif: "/images/loading/loading3.gif",
    },
    {
      gif: "/images/loading/loading4.gif",
    },
    {
      gif: "/images/loading/loading5.gif",
    },
    {
      gif: "/images/loading/loading6.gif",
    },
    {
      gif: "/images/loading/loading7.gif",
    },

    {
      gif: "/images/loading/loading9.gif",
    },
    {
      gif: "/images/loading/loading10.gif",
    },
  ],
};

const Container = styled.div`
  display: grid;
  place-items: center;
`;
const ImgCont = styled.div`
  position: relative;
`;
const Img = styled.img`
  max-width: 898px;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0px -1px 13px rgb(255 255 255);
  position: relative;
`;

const LoadingGif = () => {
  const [imgIdx, setImgIdx] = useState(
    Math.floor(Math.random() * LoadingData.images.length)
  );
  useEffect(() => {
    setImgIdx(Math.floor(Math.random() * LoadingData.images.length));
  }, []);

  return (
    <Container>
      <ImgCont>
        <Img
          src={LoadingData.images[imgIdx].gif || "/images/loading/loading7.gif"}
          alt="loading....."
        />
        <Circle bottom={"10%"} right={"10%"} />
      </ImgCont>
    </Container>
  );
};

export default LoadingGif;
