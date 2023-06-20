import { Component } from 'react';

export default class ConditionalClass extends Component {
  constructor() {
    super();

    this.state = { display: false, };
  }

  switch = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    // if (this.state.display === true) {
    //   return (
    //     <h3>This is from Conditional Function</h3>
    //   );
    // } else {
    //   return (
    //     <h3>Nothing is here</h3>
    //   );
    // }

    //////////////////////////////////////////
    // let output;

    // if (this.state.display === true) {
    //   output = <h3>This is from Conditional Function</h3>;
    // } else {
    //   output = <h3>Nothing is here</h3>;
    // }

    // return <div>{output}</div>;

    /////////////////////////////////////////
    return (
      this.state.display ? <h3>This is from Conditional Function</h3> : <h3>Nothing is here</h3>
    );
  }
}