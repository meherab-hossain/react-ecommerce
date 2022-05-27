import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../../data";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./SliderStyle.js";

const Slider = () => {
  const [slideIndex, setSlideIndex]= useState(0)
  const handleClick= (direction)=>{
    let totalSlideItem = sliderItems.length-1
    console.log(totalSlideItem)
    if (direction === "right") {
      
      setSlideIndex(slideIndex >=totalSlideItem ? 0 : slideIndex + 1)
      console.log("right", slideIndex, "totalSlideItem",totalSlideItem)
    }else{
      
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlideItem)
      console.log("left", slideIndex, "totalSlideItem",totalSlideItem)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderItems={sliderItems} slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
