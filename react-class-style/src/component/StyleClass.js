import { Component } from 'react';

export default class StyleClass extends Component {
  constructor() {
    super();

    this.state = {
      style: {
        color: "blue",
        fontSize: "45px",
      },
    };
  }

  changeColor = () => {
    let color = 'blue';
    if (this.state.style.color === 'blue') color = 'red';
    else color = 'blue';

    this.setState({
      style: {
        color: color,
        fontSize: "45px",
      }
    });
  };

  render() {
    // const heading = {
    //   color: "blue",
    //   fontSize: "45px",
    // };

    return (
      <div>
        <h3 style={this.state.style}>This is from Style Class</h3>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}