import styled from 'styled-components'

export const Dl = styled.dl`
  & dd {
    position: relative;
    & form {
      position: absolute;
      top: 10px;
      z-index: 1;
      display: ${({ display }) => display};
      width: 189px;
      height: auto;
      padding: ${({ theme }) => theme.paddingM};
      border-radius: ${({ theme }) => theme.borderXs};
      box-shadow: ${({ theme }) => theme.shadowXs};
      background-color: ${({ theme }) => theme.colorGrey};
      flex-direction: column;
      @media(max-width:425px){
        width:90%;
      }
      /* &:focus{
          outline:none;
          border: 3px solid ${({ theme }) => theme.colorParagraph};
        } */

      & label {
        margin-bottom: ${({ theme }) => theme.spacingXs};
        font-family: ${({ theme }) => theme.fontParagraphs};
      }
      & input {
        width: 145px;
        margin-top: ${({ theme }) => theme.spacingXs};
        margin-bottom: ${({ theme }) => theme.spacingS};
        padding: ${({ theme }) => theme.paddingXs} ${({ theme }) => theme.paddingM};
        border: none;
        border-radius: ${({ theme }) => theme.borderM};
        box-shadow: ${({ theme }) => theme.shadowXs};
        outline: none;
        &:focus{
          outline:none;
          border: 3px solid ${({ theme }) => theme.colorParagraph};
        }
        @media(max-width:425px){
          width:90%;
          height:40px;
        }
      }
      & button {
        width:100px;
        height:28px;
        box-shadow:inset 0 -4px 0 0 rgba(0, 0, 0, 0.18);
        margin-top: ${({ theme }) => theme.spacingS};
        border: none;
        background: ${({ theme }) => theme.colorButtonActive};
        border-radius: calc(${({ theme }) => theme.borderXs} /2);
        outline: none;
        cursor: pointer;
        &:focus{
          outline:initial;
        }
        &:focus{
          outline:none;
          border: 3px solid ${({ theme }) => theme.colorParagraph};
        }
         @media(max-width:425px){
          width:100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }


`
export const Arrow = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    right: 0px;
    width: 30px;
    height: auto;
    background: none;
    border: none;
    outline:none;
&:focus{
  border:2px solid ${({ theme }) => theme.colorParagraph};
  padding:4px;
}
  
`
