import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --borgoña-oscuro: #400b16;
    --borgoña-claro: #5A0F1B;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
    --color-text-h2:#d6b7b7;
    --color-text-p: #e8cde1;
    --btn-gradient: linear-gradient(90deg,rgba(59, 48, 34, 1) 0%, rgba(209, 54, 54, 1) 57%, rgba(59, 35, 41, 1) 100%);
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: var(--color-text-p);
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden; 
    background: #722F37;
    background: linear-gradient(180deg, var(--borgoña-oscuro) 0%, #131415 100%);
    box-sizing: border-box; 

    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;