// import React from "react";
import { Component } from 'react';

// function Hello() {
//   return <h1>Hello, World!</h1>;
// }

// const Hello = () => <h1> Hello, World!</h1>;

// export default class Hello extends React.Component {
//   render() {
//     return <h1> Hello, World!</h1>;
//   }
// }

export default class Hello extends Component {
  render() {
    //props is always an Object {}
    return (
      <h1>
        {this.props.children}
        Hello, World! {this.props.name}
      </h1>
    );
  }
}

// export default Hello;