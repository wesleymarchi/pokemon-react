import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    position: relative;
    justify-content: flex-end;
    width: 350px;
    height: 146px;
    margin: 0 auto;
    border: none;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadowCard};
    background-color: ${({ theme }) => theme.colorGrey};
    cursor: pointer;
    outline: none;
    &:focus {
      border: 3px solid ${({ theme }) => theme.colorParagraph};
    }
`

export const Img = styled.figure`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 230px;
    /* height: 146px; */
    height:-webkit-fill-available;
    border-radius: 0px 8px 8px 0px;
    overflow: hidden;
    background-color: ${({ color }) => color};
    
    & > img {
        object-fit: cover;
        max-width: 80%;
        width:200px;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: start;
    left: 8px;
    padding: ${({ theme }) => theme.paddingS};
`

export const ContainerProps = styled.div`
  display:flex;
`
