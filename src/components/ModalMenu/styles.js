import { createGlobalStyle } from 'styled-components';

export const ModalStyles = createGlobalStyle`
    & .ModalMenu {
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    border-radius: 0px 0px 16px 16px;
    border: none;
    width: 100vw;
    height: 70vh;
    background: ${({ theme }) => theme.gradientYellow};
    outline: none;
  }

    & .OverlayMenu {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.backgroundModal};
    }
    &.closeButton:focus{
       border-radius:50%;
      background-color: rgba(253, 253, 253, .5);
      outline:none;
      width:40px;
      height:40px;
    }

    & .closeButtonMenu {
        position: absolute;
        top:20px;
        right:0;
        left:85vw;
        display:flex;
        justify-content:center;
        max-width:100%;
    }
    
    & img{
    display:flex;
    justify-content:center;
    margin:0 auto;
    width:150px;
    padding-top:${({ theme }) => theme.paddingM};
    outline:none
  }
`
