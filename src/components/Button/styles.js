import styled from "styled-components";

export const StyleButton = styled.button `
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadowButton};
  border: transparent;
  border-radius: ${({ theme }) => theme.borderXs};
  width: 10%;
  min-width: 200px;
  height: 60px;
  padding: ${({ theme }) => theme.paddingS};
  background-color: ${({ theme }) => theme.colorButtonActive};
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizeFontParagraph};
  color: ${({ theme }) => theme.colorParagraph};
  outline: none;
`