import { Component } from 'react';

class MapClass extends Component {
  constructor() {
    super();
    this.languagesList = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];
  }

  render() {
    // const output = this.languagesList.map((language) => <p>{language}</p>);
    // return output;

    return (
      <div>
        <h3>Map from class component</h3>
        {this.languagesList.map((language) => <p>{language}</p>)}
      </div >
    );
  }
}

export default MapClass;