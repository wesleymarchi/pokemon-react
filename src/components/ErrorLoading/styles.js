import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(800deg);
  }
`

export const Container = styled.div`
  position: relative;
  margin: 25% auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.figure`
  &>img {
    width: 60%;
    animation: ${rotate} 2s ease-in infinite;
  }
`

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  
  &>*{
    text-align: center;
  }
  
  &>p {
    color: ${({ theme }) => theme.colorParagraph};
  }
`