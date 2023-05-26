import styled, { createGlobalStyle } from 'styled-components';

export const ModalStyles = createGlobalStyle`
  & .ModalCard {
    position: absolute;
    top: 50%;
    left: 50%;
    width: fit-content;
    margin-left: -350px;
    margin-top: -173px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    user-select: none;
  }

  & .OverlayCard {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: ${({ theme }) => theme.backgroundModal};
  }

  & .ModalCardMobile {
    position: absolute;
    top: 50%;
    left: 50%;
    width: fit-content;
    margin-left: -184.5px;
    margin-top: -355px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    user-select: none;
  }

  & .OverlayCardMobile {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: ${({ theme }) => theme.backgroundModal};
  }
`
export const Button = styled.button`
    position: absolute;
    top: -50px;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorSecond};
    outline: none;
    border: none;

    &:hover, &:focus {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorThird};
    outline: none;
    width: 40px;
    height: 40px;
    }
`
export const MobileButton = styled.button`
    position: absolute;
    top: 6px;
    right: 25px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorSecond};
    outline: none;
    border: none;

    &:hover, &:focus {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colorThird};
        outline: none;
        width: 40px;
        height: 40px;
    }
`
