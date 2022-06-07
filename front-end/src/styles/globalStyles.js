import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  input:focus, textarea:focus, select:focus{
    outline:nome;
  }

  a {
    color: ${({theme}) => theme.colors.primary};
    text-decoration: none;
  }

  .balance {
    color: ${({theme}) => theme.colors.primary};
    font-size: 35px;
  }
`

export default GlobalStyle;
