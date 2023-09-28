import logo from "./logo.svg";
import {
  AnimatedLog,
  DarkButton,
} from "./components/Button/StyledButton.styles";
import "./App.css";
import "./styles.css";

import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/StyledButton";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "blue",
    secondary: "green",
    alert: "red",
  },
  light: {
    primary: "green",
    secondary: "blue",
    alert: "red",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.light.primary};
    color: ${(props) => props.theme.light.secondary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <button>Button</button> */}
        <img src={logo} className="App-logo" alt="logo" />
        <AnimatedLog src={logo} />
        <StyledButton>Styled Button</StyledButton>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <FancyButton as="a">FancyButton</FancyButton>
        <SubmitButton>SubmitButton</SubmitButton>
        <DarkButton>DarkButton</DarkButton>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
