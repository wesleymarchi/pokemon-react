import styled from 'styled-components';
export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    box-sizing:border-box;
    border-radius: ${({ theme }) => theme.borderM};
    width: 100%;
`
export const Img = styled.figure`
    position: relative;
    left: 0;
    overflow: hidden;
    border-radius:${({ theme }) => theme.borderM} ${({ theme }) => theme.borderM} 0 0;
    width: 100%;
    
    & > img {
        object-fit: cover;
        width: 100%;
        height: 300px;
        padding: 0;
    }
`

export const Description = styled.div`
    box-sizing:border-box;
    max-width:100%;
    width:100%;
    padding: ${({ theme }) => theme.paddingM}/2;
    
    &>*{
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    }
`

export const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin:${({ theme }) => theme.spacingL} 0;
    
    & > h3, h4 {
    color: ${({ theme }) => theme.colorParagraph};
    font-size: calc(${({ theme }) => theme.sizeFontSubtitle}-10px);
    color: rgb(36, 36, 106);
  }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: ${({ theme }) => theme.spacingL} 0;
    border-radius: ${({ theme }) => theme.borderXs};
    box-shadow: ${({ theme }) => theme.shadowXs};
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 0 ${({ theme }) => theme.paddingS};
    background-color: ${({ theme }) => theme.colorWhiteLight};
    
    &>p {
      padding:${({ theme }) => theme.paddingS};
    }
`
export const SocialMedia = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacingS} auto;
    width: 30px;
    height: 30px;
    & a:hover {
      color:${({ theme }) => theme.backgroundModal};
    }

    & a:focus {
      border: 3px solid ${({ theme }) => theme.colorParagraph};
    }

    & > * {
        margin: 0 8px;
        color: ${({ theme }) => theme.colorParagraph};
    }
`
