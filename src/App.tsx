import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "react-jss";
import { useTheme } from "./core/src/context/theme";
import { themes } from "./core/src/context/theme/colorTypes";

function App() {
  const { isDark } = useTheme();
  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
