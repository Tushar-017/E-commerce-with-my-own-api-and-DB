import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
  display: flex;
  background-color: black;
  height: 36vh;
  ${mobile({ flexDirection: "column", height: "100%" })}
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`

export const Logo = styled.h1`
  color: #6a6a6a;
  font-weight: 600;
  font-size: 32px;
  ${mobile({ fontSize: "25px" })}
`

export const LogoDiff = styled.span`
  font-style: italic;
  font-weight: bold;
  color: white;
`
export const Desc = styled.p`
  margin-block: 20px;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: 200;
  max-width: 75%;
  ${mobile({ fontSize: "12px" })}
`
export const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const SocialIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  ${mobile({ display: "none" })}
`

export const Title = styled.h3`
  margin-bottom: 25px;
  color: gray;
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
  letter-spacing: 1px;
  ${mobile({ fontSize: "14px" })}
`
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  width: 50%;
  font-size: 15px;
  letter-spacing: 0.3px;
  font-weight: 200;
  margin-bottom: 10px;
`

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  ${mobile({ backgroundColor: "#d0cfcf", color: "black" })}
`
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
export const Payment = styled.img`
  width: 50%;
`
