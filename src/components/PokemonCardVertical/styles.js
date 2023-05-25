import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.borderM};
    box-shadow: ${({ theme }) => theme.shadowCard};
    background-color: ${({ color }) => color};
    
    & > h3 {
        margin-top: ${({ theme }) => theme.spacingM};
        font-size: ${({ theme }) => theme.sizeFontSubtitle};
        color: ${({ theme }) => theme.colorGrey};
    }
`

export const Img = styled.figure`
    display: flex;
    position: relative;
    top: 70px;
    z-index: 2;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 250px;
    
    & > img {
      width: 100%;
    }
`

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderM};
    box-shadow: 0px -8px 7px rgba(33, 33, 33, 0.1);
    background-color: ${({ theme }) => theme.backgroundModal};
`

export const Description = styled.div`
    position: relative;
    margin: 60px 8px 16px;
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Tags = styled.div`
  display: flex;
`

export const DetailsPokemons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    & > h3 {
        margin-right: ${({ theme }) => theme.spacingL};
        color: ${({ theme }) => theme.colorGrey};
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
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin: ${({ theme }) => theme.spacingL} auto;
    padding: 0 ${({ theme }) => theme.paddingS};
    border-radius: ${({ theme }) => theme.borderXs};
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    max-width: 100%;
`

export const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderXs};
    box-shadow: ${({ theme }) => theme.shadowXs};
    background-color: ${({ theme }) => theme.colorGrey};

    & > p{
      font-size: 12px;
    }
`
