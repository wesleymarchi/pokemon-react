import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddingB};
  width: 100%;
  box-sizing: border-box;
  
  & .carousel-prev, .carousel-next {
    color: ${({ theme }) => theme.colorGrey};
    width: 5rem;
  }
  & .carousel-prev {
    left: -1.6rem;
  }
  & .carousel-next {
    right: -1.6rem;
  }
`