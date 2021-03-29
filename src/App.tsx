import React from 'react';
import GlobalStyles from './styles/global';

import { ThemeProvider } from 'styled-components';
import useToggleTheme from "./utils/useToggleTheme";
import light from './styles/themes/light';
import Routes from './routes'
import history from './services/history';
import { Router } from 'react-router-dom';

const App: React.FC = (props) => {
  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme ? theme : light}>
      <GlobalStyles />
      <Router history={history} >
        <Routes />
        {props.children}
      </Router>
    </ThemeProvider>
  );
}

export default App;
