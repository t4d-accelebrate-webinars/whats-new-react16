import * as React from 'react';

class ThrowAnError extends React.Component {


  render() {
    throw Error('something went wrong...');    

    return null;
  }

}

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);

    if (err) {
      this.setState({ 
        hasError: true,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Loading</div>
    } else {
      return this.props.children;
    }
  }
}


export class DemoBetterErrorHandling extends React.Component {


  render() {
    return <div>
      Error Handling Demo
      <ErrorBoundary>
        <ThrowAnError />
      </ErrorBoundary>
    </div>;
  }
}