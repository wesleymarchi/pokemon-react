import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`

const loading = keyframes`
    0% {
      transform: scale(.8);
    }
    50% {
      transform: scale(1)
    }
    75% {
      transform: scale(1)
    }
    100% {
      transform: scale(.8);
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
        width: 30px;
        animation: ${rotate} 2s ease-in-out infinite;
  }
`

export const Span = styled.span`
    display: flex;
    animation: ${loading} 2s  infinite;
    
    &>p {
        color: ${({ theme }) => theme.colorParagraph};
        font-size: ${({ theme }) => theme.sizeFontParagraph}
    }
`
