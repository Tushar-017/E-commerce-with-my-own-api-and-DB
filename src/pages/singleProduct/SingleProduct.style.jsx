import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div``
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "20px", flexDirection: "column" })}
`
export const ImgContainer = styled.div`
  flex: 1;
`
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`
export const Title = styled.h1`
  font-weight: 200;
`
export const Desc = styled.p`
  margin: 20px 0px;
  width: 85%;
  letter-spacing: 0.5px;
  color: #707070;
  ${mobile({ margin: "8px 0px" })}
`
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 30px;
  width: 50%;
  ${mobile({ width: "100% " })}
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
`
export const FilterTitle = styled.span`
  font-size: 19px;
  font-weight: 200;
`

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) => props.color === "white" && "0.5px solid black"};
  background-color: ${(props) => props.color};
  margin-left: 5px;
  cursor: pointer;
  transition: all 2s ease;

  &:hover {
    border: 1px solid blue;
  }
`
export const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
  cursor: pointer;
`
export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100% " })}
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 15px;
`

export const Qty = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 5px;
`

export const Button = styled.button`
  padding: 12px;
  border: 1.5px solid teal;
  cursor: pointer;
  background-color: white;
  color: teal;
  font-weight: 500;
  transition: all 0.4s ease;

  &:hover {
    background-color: #e7f1f1;
    transform: scale(1.03);
  }
`
