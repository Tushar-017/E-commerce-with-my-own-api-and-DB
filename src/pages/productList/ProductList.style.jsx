import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div``

export const Title = styled.h1`
  margin: 20px;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* ${mobile({ width: "20px" })} */
`

export const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`

export const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ fontSize: "16px" })}
`

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ padding: "8px 2px", width: "100px" })}
`
export const Option = styled.option``
