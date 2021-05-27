import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  & html, body {
    height: 100%;
    background-color: #3f3f3f;
    overflow: hidden;
  }
  & button {
    cursor: pointer;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

