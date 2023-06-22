import { Component } from 'react';

class MapClass extends Component {
  constructor() {
    super();
    // this.languagesList = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];

    this.languagesList = [
      { id: 1, lang: 'HTML' },
      { id: 2, lang: 'CSS' },
      { id: 3, lang: 'JavaScript' },
      { id: 4, lang: 'Python' },
      { id: 5, lang: 'C++' },
    ];
  }

  render() {
    // const output = this.languagesList.map((language) => <p>{language}</p>);
    // return output;

    return (
      // first way to create key
      // <div>
      //   <h3>Map from class component</h3>
      //   {this.languagesList.map((language) => <p>{language}</p>)}
      // </div >

      // second way to create key
      // <div>
      //   <h3>Map from class component</h3>
      //   {this.languagesList.map((language, index) => <p key={index}>{language}</p>)}
      // </div>

      // third way to create key
      <div>
        <h3>Map from class component</h3>
        {this.languagesList.map((language) => <p key={language.id}>{language.lang}</p>)}
      </div>

      // fourth way to create key is using plugin to create random ids

    );
  }
}

export default MapClass;