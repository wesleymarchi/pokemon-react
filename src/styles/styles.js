import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-family: ${({ theme }) => theme.fontTitles};
        font-weight: 400px;
    }
    
    p,
    a{
        font-family:${({ theme }) => theme.fontParagraphs};
        font-size: ${({ theme }) => theme.sizeFontParagraph};
    }

`
