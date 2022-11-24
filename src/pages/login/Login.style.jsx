import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 22%;
  padding: 20px;
  /* background-color: #b4b4b4; */
  ${mobile({ width: "75%" })}
`
export const Title = styled.h1`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
`

// export const Moto = styled.p`
//   font-size: 13px;
//   padding-inline: 40px;
//   font-weight: 200;
//   text-align: center;
//   margin-bottom: 25px;
//   letter-spacing: 0.6px;
//   color: #9d9d9d;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #b4b4b4;
`
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  border: 1px solid #b4b4b4;
  padding: 12px;
  font-size: 15px;
  color: #b4b4b4;
  margin-bottom: 15px;
  border-radius: 5px;
  ${mobile({
    padding: "12px",
    backgroundColor: "#eeeeee",
    fontSize: "12px",
    border: "none",
  })}
`
export const Agreement = styled.span`
  font-size: 13px;
  margin-inline: 3px;
  margin-bottom: 15px;
  color: #909090;
`

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  letter-spacing: 1px;
  cursor: pointer;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`

export const Error = styled.span`
  color: red;
`

export const Link = styled.a`
  margin-block: 5px;
  font-size: 12px;
  text-decoration: underline;

  cursor: pointer;
`
