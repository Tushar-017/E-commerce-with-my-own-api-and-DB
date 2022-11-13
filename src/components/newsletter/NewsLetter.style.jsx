import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
  height: 50vh;
  background-color: #eff1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "40px" })}
`
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`
export const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid lightgray; */
  border-radius: 5px;
  ${mobile({ width: "80%" })}
`
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 18px;
`
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`
