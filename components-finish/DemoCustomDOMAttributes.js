import * as React from 'react';

export class DemoCustomDOMAttributes extends React.Component {

  render() {
    return <div>
      <div data-custom="test">Example 1 with data prefix</div>
      <div custom="test">Example 2 without data prefix</div>
    </div>;
  }

}