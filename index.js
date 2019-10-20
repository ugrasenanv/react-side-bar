import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./react-sidenav.css";

const App = () =>{
    return (
      <div>
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={selected => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main />
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }

render(<App />, document.getElementById("root"));
