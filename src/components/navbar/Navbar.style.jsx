import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
  height: 60px;
  /* padding-inline: 10px; */
  ${mobile({ height: "50px", paddingTop: "3px" })}
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
export const SearchContainer = styled.div`
  /* border: 0.5px solid lightgray; */
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 7px;
  background-color: #f3f0f0;
  border-radius: 15px;
  ${mobile({
    width: "65px",
    padding: "5px",
    marginLeft: "5px",
  })}
`

export const Input = styled.input`
  border: none;
  background-color: inherit;
  font-size: 14px;
  letter-spacing: 0.5px;
  ${mobile({ width: "45px", fontSize: "12px", letterSpacing: "0px" })}
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const Logo = styled.h1`
  color: #6a6a6a;
  font-weight: 600;
  font-size: 38px;
  ${mobile({ fontSize: "22px", marginLeft: "4px", flex: 2 })}
`

export const LogoDiff = styled.span`
  font-style: italic;
  font-weight: bold;
  color: black;
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.5, justifyContent: "center" })}
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
