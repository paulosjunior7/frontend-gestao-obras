import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import { Menu } from './menu';

interface Props {
  toggleTheme?: () =>  void;
  AtualizaTheme?: (color: string) => void;
}

const AppRoutes: React.FC<Props> = ({ children }) => {


  let mapRoutes = (route: string) => {
    // if (((Menu as any)[route] as any).permissao.includes(user?.usuario.tipo)) {
      return (
        <Route
          path={((Menu as any)[route] as any).path}
          component={((Menu as any)[route] as any).component}
        />
      )
    // }
  }

  const keys = Object.keys(Menu);

  return (
    <Router>
      <SideMenu />
      <Header />
        <div style={{ marginLeft: '260px'}}>
          {children}
          <Switch>
              { keys.map(mapRoutes)}
          </Switch>
        </div>
    </Router>
  );
}

export default AppRoutes;