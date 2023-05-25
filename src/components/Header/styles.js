import styled from 'styled-components'

export const StyledHeader = styled.header`
    position: relative;
    justify-content: center;
    width: 100%;
    height: 70px;
    box-shadow: ${({ theme }) => theme.shadowB};
    background-color: ${({ theme }) => theme.colorThird};
`
export const Container = styled.div`
    display: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 85%;
    height: 65px;
    max-width: ${({ theme }) => theme.containerMaxWidth};
  
    &>a:focus {
      outline: none;
      border: 3px solid ${({ theme }) => theme.colorParagraph};
      padding: 4px;
    }
`
export const StyleNav = styled.div`
    @media (max-width: 425px) {
      display: none
    }
`

export const Img = styled.img`
    width: 120px;
`

export const BurgerButton = styled.button`
    display: none;
    border: none;
    background: none;
    @media (max-width: 425px) {
        display: initial;
        outline: none;
        
        &:focus {
          border-radius: 50%;
          background-color: rgba(253, 253, 253, .5);
          outline: none;
          width: 40px;
          height: 40px;
        }
        
        &:hover {
        border-radius: 50%;
        background-color: rgba(253, 253, 253, .5);
        outline: none;
        width: 40px;
        height: 40px;
    }
}
`
