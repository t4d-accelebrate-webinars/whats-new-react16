import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './Header';
import { Home } from './Home';
import { DemoCustomDOMAttributes } from './DemoCustomDOMAttributes';
import { DemoNewRenderReturnTypes } from './DemoNewRenderReturnTypes';
import { DemoBetterErrorHandling } from './DemoBetterErrorHandling';
import { DemoRenderOutsideDOMTree } from './DemoRenderOutsideDOMTree';


export const Demos = props =>
  <Router>
    <main>
      <Header />
      <div>
        <Route path="/demo-1" component={DemoCustomDOMAttributes} />
        <Route path="/demo-2" component={DemoNewRenderReturnTypes} />
        <Route path="/demo-3" component={DemoBetterErrorHandling} />
        <Route path="/demo-4" component={DemoRenderOutsideDOMTree} />
        <Route exact path="/" component={Home} />
      </div>
    </main>
  </Router>;