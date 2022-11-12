import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  position: relative;
  overflow: hidden;
  /* background-color: #e6f0f4; */
  ${mobile({ display: "none" })}
`
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`

export const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

export const Title = styled.h1`
  font-size: 70px;
`
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 10px;
`
