import styled from 'styled-components';

export const Span = styled.span`
    display: flex;
    width: auto;
    min-width: 40px;
    height: 16px;
    padding: 0 ${({ theme }) => theme.paddingS};
    margin: 0 ${({ theme }) => theme.spacingS} 0 0;
    border-radius: 11px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    background-color: ${({ color }) => color};
    
    & > p {
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: ${({ theme }) => theme.sizeFontsH6};
    }
`
