import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Manrope from 'assets/fonts/Manrope-Regular.ttf';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';

const GlobalStyles = createGlobalStyle`
${normalize}
:root {
--breakpoint-grid_column-gap: 24px;
--breakpoint-grid_row-gap: 40px;
--breakpoint-grid_columns: 1;
--card-content-grid_gap:2px 8px;
--h-x-sf-jw:4px;
--text-color-bold:#222222;
--bg-color:#dddddd;
--border-radius:12px;


  @media (min-width: 550px) {
    .home_card {
    --breakpoint-grid_columns: 2;
  }} @media (min-width: 950px) {
    .home_card {
      --breakpoint-grid_columns: 3;
    }
  }@media (min-width: 1128px) {
    .home_card {
      --breakpoint-grid_columns: 4;
    }
  } @media (min-width: 1640px) {
    .home_card {
    --breakpoint-grid_columns: 5;
  } }
  @media (min-width: 1880px) {
       .home_card{
    --breakpoint-grid_columns: 6;}
  }

}
 
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
    font-size: 12px;
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
