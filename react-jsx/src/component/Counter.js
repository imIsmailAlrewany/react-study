import { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  // first way to bind event with state by using arrow inside event
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  // second way to bind event with state by using arrow func to create the method
  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // third way to bind event with state by using bind method inside constructor
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      window.alert('Counter is already 0');
    }
  }

  render() {
    return (
      <div> {/*you can't return more than parent element*/}
        <p>Count value is: {this.state.count}</p>
        {/*I use arrow function with state so it'll not make confusion between the function itself and the component because arrow function doesn't support this keyword not like regular function*/}

        {/* <button type="button" onClick={() => this.increment()}>Increment</button> */}

        <button type="button" onClick={this.increment}>Increment</button>
        <button type="button" onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }

}

export default Counter;