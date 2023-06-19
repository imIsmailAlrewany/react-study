import { Component } from 'react';

class ClassEvent extends Component {

  returnHi() {
    console.log('Hi from ClassEvent!');
  }

  render() {
    return (
      <div>
        <p>This is ClassEvent</p>
        <button onClick={this.returnHi}>click</button>
      </div>
    );
  }
}

export default ClassEvent;