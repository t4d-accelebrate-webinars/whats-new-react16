import * as React from 'react';

class ThrowAnError extends React.Component {

  render() {
    throw Error("something went wrong...");
    return null;
  }
}

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errorOccurred: false,
    };
  }

  componentDidCatch(err, info) {
    if (err) {
      this.setState({
        errorOccurred: true,
      });
    }
  }

  render() {
    if (this.state.errorOccurred) {
      return "An error occurred loading the component";
    } else {
      return this.props.children;
    }
  }
}

export class DemoBetterErrorHandling extends React.Component {

  render() {
    return <div>
      Demo Better Error Handling
      <ErrorBoundary>
        <ThrowAnError />
      </ErrorBoundary>
    </div>;
  }
}