import styled from 'styled-components';

export const Dl = styled.dl` 
& dd {
  position: relative;
  & ul {
    /* display: flex; */
    display: ${({ display }) => display};
    flex-direction: column;
    position: absolute;
    top: 10px;
    z-index: 1;
    overflow: auto;
    width: 102px;
    height: 125px;
    padding-top: ${({ theme }) => theme.paddingM};
    padding-left: ${({ theme }) => theme.paddingB};
    border-radius: ${({ theme }) => theme.borderXs};
    box-shadow: ${({ theme }) => theme.shadowXs};
    background-color: ${({ theme }) => theme.colorGrey};
    list-style: none;
          
    @media(max-width: 425px) {  
      width: 90%;
      height: 30vh;
      grid-template-columns: 1fr 1fr;
    }   
      
    & label:hover {
      border-radius: 4px;
      color: ${({ theme }) => theme.colorGrey};
      background-color: ${({ theme }) => theme.backgroundModal};
    }
    
    & label:focus {
      outline: none;
      border: 3px solid ${({ theme }) => theme.colorParagraph};
    }
    
    & label {
      margin-bottom: ${({ theme }) => theme.spacingS};
      font-family: ${({ theme }) => theme.fontParagraphs};
      user-select: none;
      & input {
        margin-right: ${({ theme }) => theme.spacingS};
      }
    }
    
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      display: ${({ display }) => display};
      border-radius: ${({ theme }) => theme.borderS};
      background: ${({ theme }) => theme.colorWhiteLight};
      box-shadow: ${({ theme }) => theme.shadowB};
    }
  } 
}
`

export const FilterContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 25px;
    margin-right: ${({ theme }) => theme.spacingB};
    border-radius: ${({ theme }) => theme.borderXs};
    box-shadow: ${({ theme }) => theme.shadowXs};
    background-color: ${({ theme }) => theme.colorGrey};
    user-select: none;
    cursor: pointer;
    @media (max-width: 425px){
      margin: 24px auto;
      width: 90%;
    }

    & p {
      text-transform: capitalize;
    }
    /* & svg {
    position: absolute;
    right: 10px;
    } */
`
export const Arrow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    width: 30px;
    height: auto;
    background: none;
    border: none;
    outline: none;
    &:focus {
        border: 2px solid ${({ theme }) => theme.colorParagraph};
        padding: 4px;
    }
`
