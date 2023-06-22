import { Component } from 'react';

class ClassForm extends Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     firstName: '',
  //     lastName: ''
  //   };
  // }

  state = {
    firstName: '',
    lastName: '',
  };

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fName: this.state.firstName,
      lName: this.state.lastName,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />
        <input type="text" value={this.state.lastName} onChange={this.handleLastName} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ClassForm;