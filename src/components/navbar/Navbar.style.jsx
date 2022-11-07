import styled from "styled-components"

export const Container = styled.div`
  height: 60px;
`
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  /* border: 0.5px solid lightgray; */
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 7px;
  background-color: #f3f0f0;
  border-radius: 15px;
`

export const Input = styled.input`
  border: none;
  background-color: inherit;
  font-size: 14px;
  letter-spacing: 0.5px;
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const Logo = styled.h1`
  color: #6a6a6a;
  font-weight: 600;
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
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
