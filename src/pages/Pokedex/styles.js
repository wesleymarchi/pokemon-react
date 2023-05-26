import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  min-height: calc(100vh - 140px);
  background: linear-gradient(${({ theme }) => theme.colorGrey}, ${({ theme }) => theme.colorWhiteLight});
  @media (max-width: 425px){
    min-height: calc(100vh - 175px);
  }
`
