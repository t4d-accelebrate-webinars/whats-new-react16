import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => <ul id="home-menu">
    <li><Link to="/demo-1">Demo 1: Custom DOM Attributes</Link></li>
    <li><Link to="/demo-2">Demo 2: New Render Return Types</Link></li>
    <li><Link to="/demo-3">Demo 3: Better Error Handling</Link></li>
    <li><Link to="/demo-4">Demo 4: Rendering Outside the Component DOM Tree</Link></li>
  </ul>;
