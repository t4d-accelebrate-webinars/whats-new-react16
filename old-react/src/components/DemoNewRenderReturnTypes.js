import * as React from 'react';

class ReturnTypeStringOrNumber extends React.Component {

  render() {
    return "Test";
  }

}

class ReturnTypeSiblings extends React.Component {

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
      <ReturnTypeStringOrNumber />
      <ul>
        <ReturnTypeSiblings />
      </ul>
    </div>;
  }
}