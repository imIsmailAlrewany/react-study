function MapFunctional() {
  // const languagesList = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];
  const languagesList = [
    { id: 1, lang: 'HTML' },
    { id: 2, lang: 'CSS' },
    { id: 3, lang: 'JavaScript' },
    { id: 4, lang: 'Python' },
    { id: 5, lang: 'C++' },
  ];

  // const output = languagesList.map((language) => <p>{language}</p>);
  // return output;

  return (
    // first way to create key
    // <div>
    //   <h3>Map from function component</h3>
    //   {languagesList.map((language) => <p>{language}</p>)}
    // </div>

    // second way to create key
    // <div>
    //   <h3>Map from function component</h3>
    //   {languagesList.map((language, index) => <p key={index}>{language}</p>)}
    // </div>

    // third way to create key
    <div>
      <h3>Map from function component</h3>
      {languagesList.map((language) => <p key={language.id}>{language.lang}</p>)}
    </div>

    // fourth way using plugin to create random unique ids
  );
}

export default MapFunctional;