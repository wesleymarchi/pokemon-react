import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ legend }) => legend ? '95%' : '90%'};
  margin-bottom: ${({ theme }) => theme.spacingB};
  padding:${({ theme }) => theme.paddingS};

  & p {
    width: 100%;
    color: ${({ theme }) => theme.colorGrey};
    margin-bottom: ${({ theme }) => theme.spacingM};

    &[data-value] {
      position: relative;

      &:after {
        content: attr(data-value);
        position: absolute;
        left: 0px;
        bottom: -22px;
      }
    }
  }

  & progress[value] {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    border: none;
    background-color: whiteSmoke;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;
    animation: progressBar 1.5s ease-in-out;

    &::-webkit-progress-bar {
      border-radius: 5px;
      background-color: transparent;
    }

    &::-webkit-progress-value {
      background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0.25),rgba(0, 0, 0, 0.2)),
      -webkit-linear-gradient(left, ${({ theme }) => theme.colorThird}, ${({ theme, legend }) => legend ? theme.colorCyan : theme.colorDanger});
      border-radius:5px;
    }

    &::-moz-progress-bar {
      border: 0;
      border-radius: 5px;
      background-size: 35px 20px, 100% 100%, 100% 100%;
      -moz-linear-gradient(rgba(255, 255, 255, .25), rgba(0, 0, 0, .2)), -moz-linear-gradient( left, ${({ theme }) => theme.colorThird}, ${({ theme }) => theme.colorDanger});
    }
  }

  @media(max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacingS};
  }

  @keyframes progressBar {
    0% {
      padding-right: 100%;
    }
    100% {
      padding-right: 0;
    }
  }
`
