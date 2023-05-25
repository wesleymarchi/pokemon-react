import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colorGrey};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  max-width: ${({ theme }) => theme.containerMaxWidth};
  margin: ${({ theme }) => theme.spacingS} auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Credits = styled.div`
  display: flex;
  &>p {
    text-align: center;
  }
`

export const Nav = styled.nav`
  display: flex;
`

export const Item = styled.li`
  margin: ${({ theme }) => theme.spacingM};
  list-style: none;
  
  &>a {
    color: ${({ theme }) => theme.colorParagraph};
    text-decoration: none;
  }
  
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colorParagraph};
    padding: 4px;
  }
  
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colorParagrapg};
  }
`