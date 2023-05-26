import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: calc(100vh - 140px);
    background-color: ${({ theme }) => theme.colorDanger};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Banner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: ${({ theme }) => theme.containerMaxWidth};

    &>h1 {
        position: absolute;
        z-index: 1;
        font-size: 400px;
        color: ${({ theme }) => theme.backgroundModal};
    }

    @media (max-width: 425px) {
        &>h1 {
          font-size:200px;
        }
    }
`
export const Img = styled.figure`
    display: flex;
    z-index: 2;
    justify-content: center;
    height: auto;
    
    &>img {
      width:80%;
    }
`
export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacingS};
`

export const Text = styled.div`
    display:flex;

    &>p{
        margin-right: 4px;
        color: ${({ theme }) => theme.colorParagraph};
        font-size: ${({ theme }) => theme.sizeFontSubtitle};
    }

    &>p + p {
        margin-bottom:${({ theme }) => theme.spacingS};
        color:${({ theme }) => theme.colorGrey};
    }

    @media (max-width: 425px){
      flex-direction: column;
    }
`
