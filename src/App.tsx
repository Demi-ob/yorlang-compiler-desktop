import "./App.css";

import Dashboard from "./views/Dashboard/Dashboard";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <BrowserRouter>
          <Switch>
            <Route path="/" name="Dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
