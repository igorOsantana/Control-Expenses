import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  & body {
    background-color: #3f3f3f;
  }
  & button {
    cursor: pointer;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

