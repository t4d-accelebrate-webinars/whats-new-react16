import * as React from 'react';
import * as ReactDOM from 'react-dom';

// class SimplePortal extends React.Component {

//   render() {

//     return ReactDOM.createPortal(
//       this.props.children,
//       document.querySelector('#' + this.props.elementId),
//     );

//   }

// }

class ModalDialog extends React.Component {

  constructor(props) {
    super(props);

    this.screenBlockDIV = document.createElement('div');
    this.screenBlockDIV.classList.add('screen-block');
    this.modalDIV = document.createElement('div');
    this.modalDIV.classList.add('modal-dialog');
  }

  displayModal = () => {
    if (this.props.showModal) {
      document.body.appendChild(this.screenBlockDIV);
      document.body.appendChild(this.modalDIV);
    } else {
      this.screenBlockDIV.remove();
      this.modalDIV.remove();
    }
  }

  componentWillMount() {
    this.displayModal();
  }

  componentDidUpdate() {
    this.displayModal();
  }

  componentWillUnmount() {
    this.screenBlockDIV.remove();
    this.screenBlockDIV = undefined;
    this.modalBlockDIV.remove();
    this.modalBlockDIV = undefined;
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalDIV);
  }

}

export class DemoRenderOutsideDOMTree extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  showModal = () => this.setState({ showModal: true });
  hideModal = () => this.setState({ showModal: false });

  render() {
    return <div>
      <ModalDialog showModal={this.state.showModal}>
        <div>
          <h2>Modal Window</h2>
          <button type="button" onClick={this.hideModal}>Close</button>
        </div>
      </ModalDialog>

      <button type="button" onClick={this.showModal}>Show</button>

    </div>;
  }
  

  // render() {
  //   return <div>
  //     Main Component DOM Tree
  //     <SimplePortal elementId="example-portal">
  //       <div><h1>Simple Portal Example</h1></div>
  //     </SimplePortal>
  //   </div>;
  // }
}