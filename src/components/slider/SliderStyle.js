import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
  display: flex;
  position: relative;
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all .5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
