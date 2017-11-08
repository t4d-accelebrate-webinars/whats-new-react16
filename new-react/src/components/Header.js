import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {

  render() {

    return <header>
      <h1>Demo React App <small>(Version: {React.version})</small></h1>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/demo-1">Demo 1</NavLink></li>
          <li><NavLink to="/demo-2">Demo 2</NavLink></li>
          <li><NavLink to="/demo-3">Demo 3</NavLink></li>
          <li><NavLink to="/demo-4">Demo 4</NavLink></li>
        </ul>
      </nav>
    </header>;

  }

}