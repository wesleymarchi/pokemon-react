import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    margin: ${({ theme }) => theme.paddingS};
    margin-left: 0;
    & > p {
      text-align: center;
    }
`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    border: 3px solid ${({ theme }) => theme.colorParagraph};
    border-radius: 50%;
`
