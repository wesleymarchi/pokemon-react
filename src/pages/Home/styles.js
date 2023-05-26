import styled, { keyframes } from 'styled-components';

//* Frames
const pokeball = keyframes`
  from {
    transform: rotate(0deg) scale(0.5) translate(-200px, 300px);
  }

  to {
    transform: rotate(360deg) scale(1) translate(0px, 0);
  }
`

const clouds = keyframes`
    0% { transform: translate(-100px, 0);}
    100% {
      transform: translate(500px, 0);
    }
`
const skip = keyframes`
    0% {transform: translate(0, 70px) }
    50% {transform: translate(0, 90px)}
    100% {
     transform: translate(0, 70px);
    }
`
//* Frames end

//* Hero
export const Hero = styled.section`
    display: flex;
    align-items: start;
    justify-content: center;
    overflow-x: hidden;
    width: 100%;
    min-height:calc(100vh - 125px);
    background: ${({ theme }) => theme.gradientYellow};
    
    @media (max-width: 768px){
      height: auto;
    }
`
//* Container
export const Container = styled.div`
    display: flex;
    justify-content: center;
    /* min-height:100%; */
    min-height: 45rem;
    box-sizing: border-box;
    width: 85%;
    max-width: ${({ theme }) => theme.containerMaxWidth};
    outline: none;
    
    @media (min-width: 1560px){
      min-height: 60rem;
    }
    @media (max-width: 768px) {
      flex-direction:column-reverse;
    }
`

//* Description
export const Description = styled.div`
    position: relative;
    z-index:2;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    max-width: 100%;
    min-height:100%;
    margin: 0;
    
    & > * {
      margin: ${({ theme }) => theme.spacingL} 0;
    }
    & > h1 {
      font-size: ${({ theme }) => theme.sizeFontTitle};
    }
    & > p {
      font-size: ${({ theme }) => theme.sizeFontSubtitle};
    }
    
    //?Button
    &>a >button:hover {
        background:${({ theme }) => theme.colorSecond};;
    }
    &>a:focus {
      border: 3px solid ${({ theme }) => theme.colorParagraph};
      padding: 4px;  
      outline: none;
    }
    &>a>button:focus {
      border: 3px solid ${({ theme }) => theme.colorParagraph};
      padding: 4px;  
      outline: none;
    }
    
    @media (max-width: 768px) {
        z-index: 10;
        align-items: center;
        justify-content: center;
    
        & > p {
          text-align: center;
        }
    
        & > h1 {
          text-align: center;
        }
    
        @media (max-width: 425px) {
            & > h1 {
              font-size: ${({ theme }) => theme.sizeFontCardTitleImg};
            }
        }
    }
`
//* Banner
export const Banner = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    /* height: 32rem; */
    height: auto;
    
    
    & > #Pokeball {
        position: absolute;
        z-index: 5;
        top: 30px;
        right: -165px;
        overflow: hidden;
        animation: ${pokeball} ease-in-out 3s;
        width: 50%;
      
        @media (max-width: 425px) {
        top: 20px;
        right: -85px;
    }
}

    & > #Pikachu {
        position: absolute;
        z-index: 4;
        top: 30px;
        left: -20px;
        animation: ${skip} 4s ease-in-out infinite;
        width: 80%;
        
        @media (max-width: 425px){
            top: -80px;
            left: -50px;
        }
    }

    & > #Cloud {
        position: absolute;
        z-index: 3;
        top: 50px;
        right: 60px;
        animation: ${clouds} 10s ease-in-out infinite;
        width: 60%;
        
        @media (max-width: 425px){
        top: 50px;
        right: 60px;
        }
    }

    & > #Cloud2 {
        position: absolute;
        z-index: 2;
        top: 255px;
        left: 60px;
        animation:${clouds} 10s linear infinite;
        width: 20%;
    }

    @media (max-width: 768px){
        width: 80%;
        height: 32rem;
    }
    @media (max-width: 425px){
        width: 100%;
        height: 15rem;
        & > #Pokeball {
            top:70px;
            right:-85px;
        }
    }
`
