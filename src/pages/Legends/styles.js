import styled from 'styled-components';

export const StylesLegends = styled.div`
    background-color: ${({ theme }) => theme.colorParagraph};
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 85%;
    max-width: ${({ theme }) => theme.containerMaxWidth};
`