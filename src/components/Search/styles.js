import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 73.5vw;
  height: 53px;
  max-width: 1088px;
  margin: 0px ${({ theme }) => theme.spacingL};
  padding-left: ${({ theme }) => theme.paddingB};
  border: none;
  border-radius: ${({ theme }) => theme.borderB};
  box-shadow: ${({ theme }) => theme.shadowM};
  background: ${({ theme }) => theme.colorGrey};
  font-size: ${({ theme }) => theme.sizeFontParagraph};
  outline: none;
  &:focus{
    border: 3px solid ${({ theme }) => theme.colorParagraph};
  }
  @media (max-width:425px) {
    width: 90%;
    height: 40px;
  }
`

export const H1 = styled.h1`
  width: 73.5vw;
  margin: ${({ theme }) => theme.spacingXL} auto ${({ theme }) => theme.spacingM};
  font-size: 42px;
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 769px) {
    font-size: ${({ theme }) => theme.sizeFontCardTitleImg};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizeFontSubtitle};
  }
`
