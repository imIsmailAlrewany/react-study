import { useState } from 'react';

function FunctionalForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fName: firstName,
      lName: lastName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <input type="text" value={lastName} onChange={handleLastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FunctionalForm;