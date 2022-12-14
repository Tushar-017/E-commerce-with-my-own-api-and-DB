import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`
export const Circle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.15);
  }
  &:active {
    color: black;
  }
`
export const Deal = styled.p`
  color: #04874a;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`
