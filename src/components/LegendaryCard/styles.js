import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 125px;
  height: 180px;
  margin: 50px auto;
  border-radius: ${({ theme }) => theme.borderXs};
  box-shadow: ${({ theme }) => theme.shadowCard};
  background: ${({ theme }) => theme.colorGold};
  user-select: none;
  cursor: pointer;
  filter: brightness(0.5);

  &:active {
    transform: scale(1.1);
    filter: brightness(1);
  }
  
  &:hover {
    transform: scale(1.1);
    filter: brightness(1);
  }
  
  &:focus {
    transform: scale(1.1);
    filter: brightness(1);
    margin: 3px solid ${({ theme }) => theme.colorThird};
    outline: none;
  }
`
export const Img = styled.figure`
  position: absolute;
  z-index: 2;
  top: -24px;
  right: 6px;
  width: 150px;

  & > img {
    width: 155px;
    max-width: 160px;
  }
`
export const Card = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddingS};
  border-radius: ${({ theme }) => theme.borderXs};
  background-color: ${({ theme }) => theme.colorGrey};

  & > h3 {
    font-size: ${({ theme }) => theme.sizeFontsH6};
  }
`

export const Pokeball = styled.figure`
  width: 18px;
  height: 18px;

  & > img {
      width: 20px;
      height: 20px;
      max-width: 100%;
      padding-top: 0;
}
`
