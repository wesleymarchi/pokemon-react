import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 175px);
  justify-content: unset;
  max-width: 1230px;
  margin: 32px auto;
  padding-left: 140px;
  
  @media (max-width: 769px) {
    padding: 0;
    justify-content: center;
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`