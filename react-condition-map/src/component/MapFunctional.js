function MapFunctional() {
  const languagesList = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];

  // const output = languagesList.map((language) => <p>{language}</p>);
  // return output;

  return (
    <div>
      <h3>Map from function component</h3>
      {languagesList.map((language) => <p>{language}</p>)}
    </div>
  );
}

export default MapFunctional;