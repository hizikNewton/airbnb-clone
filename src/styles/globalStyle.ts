import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Manrope from 'assets/fonts/Manrope-Regular.ttf';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';

const GlobalStyles = createGlobalStyle`
${normalize}
 
@font-face {
font-family: "Manrope";
  src:url(${Manrope}) format("truetype")
}
@font-face {
font-family: "Montserrat";
  src:url(${Montserrat}) format("truetype")
}

body {
    margin: 0;
    padding: 0;
    font-family: Manrope,Montserrat;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background: #FAFAFE;
    @media (max-width: 480px) {
        font-size:12px;
        scrollbar-width
        ::-webkit-scrollbar {
          width: 0;
          display:none
        }
    }
  }
  #root{
        margin:0 auto;
    }
    html {
      font-size: 10px;
    }

`;

export default GlobalStyles;
