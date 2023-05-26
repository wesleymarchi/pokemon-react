import styled from 'styled-components';

export const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:${({ theme }) => theme.colorGrey};
  & p, a{
    line-height: 150%;
    font-size: ${({ theme }) => theme.sizeFontParagraph};
    margin:${({ theme }) => theme.spacingB} 0;
  }
`

export const Container = styled.div`
  width: 85%;
  box-sizing: border-box;
  margin: ${({ theme }) => theme.spacingB} auto;
  max-width: ${({ theme }) => theme.containerMaxWidth};
    
  & h1 {
    font-size: ${({ theme }) => theme.sizeFontTitle};
    margin: ${({ theme }) => theme.spacingXL} 0;
    color: rgb(36, 36, 106);
  
    @media (max-width: 425px) {
      font-size: ${({ theme }) => theme.sizeFontCardTitleImg};
    }
    
    @media(max-width:425px){
      &>* {
        text-align: center;
      }
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  margin: 0 auto;
  min-height: calc(100vh - 125px);
  width: 100%;

  @media (max-width: 768px){
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }


  @media (max-width: 425px){
    grid-template-columns:1fr;
  }
`
