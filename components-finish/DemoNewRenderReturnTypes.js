import * as React from 'react';

class RenderStringOrNumber extends React.Component {

  render() {
    return 'test';
  }

}

class RenderSiblings extends React.Component {
  
    render() {
      return [
        <li key="1">red</li>,
        <li key="2">white</li>,
        <li key="3">blue</li>,
      ];
    }
  
  }
  
export class DemoNewRenderReturnTypes extends React.Component {

  render() {
    return <div>
      <RenderStringOrNumber />
      <ul>
        <RenderSiblings />
      </ul>
    </div>;
  }
}