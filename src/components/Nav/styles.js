import styled from 'styled-components';

export const StyleNav = styled.nav`
    display: flex;
    
    @media (max-width: 425px) {
      justify-content: center;
      &>ul {
          flex-direction: column;
          align-items: center;
      }
    }
`
export const Ul = styled.ul`
  display:flex;
`

export const Item = styled.li`
    margin: ${({ theme }) => theme.spacingM};
    list-style: none;
    outline: none;

    & > a { 
        color: ${({ theme }) => theme.colorParagraph};
        text-decoration: none;

        &:focus{
          border-bottom: 3px solid ${({ theme }) => theme.colorParagraph};
          outline: none;
          margin: 5px;
        } 

        &:hover{
            border-bottom: 3px solid ${({ theme }) => theme.colorParagraph};
        }
    }
  
    @media(max-width:425px){
        &>a{
            font-size:${({ theme }) => theme.sizeFontSubtitle};
        }
    }
`
