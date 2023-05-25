import styled from 'styled-components';

export const LoadingErrorContainer = styled.div`
    display: flex;
    height: 45rem;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: ${({ theme }) => theme.containerMaxWidth};
    min-height: 680px;
`

export const LegendTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:${({ theme }) => theme.spacingM} auto;
    
    &>h1 {
      color: ${({ theme }) => theme.colorGrey};
      font-size: ${({ theme }) => theme.sizeFontTitle};
      margin: ${({ theme }) => theme.spacingM} 0;
      user-select: none;
    }
`
export const Legend = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 425px) {
      flex-direction: column;
    }
`
export const Img = styled.figure`
    display: flex;
    align-items: center;
    width: 50%;
    height: 33rem;
    animation: 3s skip infinite;
    
    & img {
      width: 75%;
      object-fit: cover;
    }
  
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      width: 70%;
      height: 30px;
      margin: 0 auto;
      background: -webkit-radial-gradient(
      center, ellipse,
      rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 80%);
      animation: 3s shadow infinite;
    }

    @keyframes skip {
      0% {transform: translateY(-50px);}
      50%{transform: translateY(-45px);}
      100% {transform: translateY(-50px);}
    }
    @keyframes shadow {
      0% {transform: translateY(10px);}
      50%{transform: translateY(5px);}
      100% {transform: translateY(10px);}
    }
    
    @media (max-width: 768px){
      &>img {
        width: 100%;
      }
    }
    
    @media (max-width: 425px){
      width: 100%;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
  
    &>h2 {
      color: ${({ theme }) => theme.colorGrey};
      font-size: ${({ theme }) => theme.sizeFontCardTitleImg};
    }
  
    &>p{
      color: ${({ theme }) => theme.colorGrey};
      font-size: ${({ theme }) => theme.sizeFontParagraph};
    }
  
    @media (max-width: 425px){
      width: 100%;
    }
`

export const Tags = styled.div` 
    display: flex;
    margin: 15px 0;
`

export const Features = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
