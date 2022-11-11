import styled from "styled-components"

export const Container = styled.div`
  min-height: 60vh;
`
export const Wrapper = styled.div`
  padding: 20px;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 23px;
  text-align: center;
  color: teal;
  margin-top: 20px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent "};
  color: ${(props) => props.type === "filled" && "white"};
`

export const TopTexts = styled.div``

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Info = styled.div`
  flex: 3;
`

export const Product = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
`
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
export const Image = styled.img`
  width: 255px;
`

export const Details = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ProductName = styled.span``

export const ProductId = styled.span``

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

export const ProductSize = styled.span``

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Qty = styled.div`
  font-size: 22px;
  margin: 5px;
`
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

export const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
  width: 80%;
  margin: 25px;
  margin-left: 50px;
`
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`
export const SummaryTitle = styled.h1`
  font-weight: 200;
`
export const SummaryItem = styled.div`
  margin-block: 25px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 500};
  font-size: ${(props) => props.type === "total" && "24px "}; ;
`
export const SummaryItemText = styled.span``
export const SummaryItemPrice = styled.span``

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  /* font-size: 16px; */
  font-weight: 600;
  border-radius: 5px;
  border: none;
  letter-spacing: 1px;
`
