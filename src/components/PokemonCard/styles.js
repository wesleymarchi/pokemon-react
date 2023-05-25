import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position:relative;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    min-width:700px;
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.borderM};
    padding: ${({ theme }) => theme.paddingS};
    box-shadow: ${({ theme }) => theme.shadowCard};
    background-color: ${({ theme }) => theme.colorGrey};
`

export const Img = styled.figure`
    position:absolute;
    width: 40%;
    height: 100%;
    left: 0;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadowXs};
    border-radius: ${({ theme }) => theme.borderM} 0 0 ${({ theme }) => theme.borderM};
    background-color: ${({ color }) => color};

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Tags = styled.div` 
    display: flex;
    position: absolute;
    right: 16px;
    bottom: 24px;
    & span {
      box-shadow: ${({ theme }) => theme.shadowPokemonCardTag};
    }
`

export const Description = styled.div`
    width: 60%;
    max-width: 100%;
    padding: ${({ theme }) => theme.paddingM};
    box-sizing: border-box;
`

export const TitleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > h3 {
        font-size: ${({ theme }) => theme.sizeFontSubtitle};
        color: ${({ theme }) => theme.colorParagraph};
    }
`

export const DetailsPokemons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    
    & > h3 {
        margin-right: ${({ theme }) => theme.spacingL};
        color: ${({ theme }) => theme.colorParagraph};
    }
`

export const Id = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorPrimary};
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin: ${({ theme }) => theme.spacingL} 0;
    border-radius: ${({ theme }) => theme.borderXs};
    padding: 0 ${({ theme }) => theme.paddingS};
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.shadowXs};
    background-color: ${({ theme }) => theme.colorGrey};
`

export const HealthyContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    &>div {
      width: 50%;
      margin: 0;
      & p {
        color: ${({ theme }) => theme.colorParagraph};
      }
    }
`

export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 8px;
    max-width: 100%
`
export const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderXs};
    box-shadow: ${({ theme }) => theme.shadowXs};
    background-color: ${({ theme }) => theme.colorGrey};
`
