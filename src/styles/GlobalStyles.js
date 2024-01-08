import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-orange: hsl(35, 77%, 62%);
  --color-red: hsl(5, 85%, 63%);

  --color-off-white: hsl(36, 100%, 99%);
  --color-gray-blue: hsl(233, 8%, 79%);
  --color-dark-gray-blue: hsl(236, 13%, 42%);
  --color-dark-blue: hsl(240, 100%, 5%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media (max-width: 75em) {
    font-size: 56%;
  }
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  color: var(--color-dark-gray-blue);
  line-height: 1.5;
  min-height: 100vh;
  padding: 9.6rem 0;
}

h1 {
  color: var(--color-dark-blue);
  font-size: 6rem;
  font-weight: 800;
  line-height: 1.05;

  @media (max-width: 53em) {
    font-size: 4.8rem;
  }
}

button {
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  
  &:has(svg) {
    line-height: 0;
  };
}

a {
  font-weight: 800;
  color: var(--color-dark-blue);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: var(--color-red);
  }
}
`;

export default GlobalStyles;
