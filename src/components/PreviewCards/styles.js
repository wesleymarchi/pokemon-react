import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 390px);
  grid-gap: ${({ theme }) => theme.spacingB};
  justify-content: center;
  max-width: ${({ theme }) => theme.containerMaxWidth};
  margin: 0 auto;
  list-style: none;

   @media (max-width:768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px){
    grid-template-columns: 100%;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    display: ${({ display }) => display};
    border-radius: ${({ theme }) => theme.borderS};
    background: ${({ theme }) => theme.backgroundModal};
    box-shadow: ${({ theme }) => theme.shadowB};
  }
`
