import { useState } from 'react';

// const heading = {
//   color: "blue",
//   fontSize: "45px",
// };

export default function StyleComponent() {

  const [style, setStyle] = useState({
    color: "blue",
    fontSize: "45px",
  });

  const changeColor = () => {
    let color = 'blue';
    if (style.color === 'blue') color = 'red';
    else color = 'blue';

    setStyle({
      color: color,
      fontSize: "45px",
    });
  };

  return (
    // <div>
    //   <h3 style={heading}>This is from Style Component</h3>
    // </div>

    <div>
      <h3 style={style}>This is from Style Functional</h3>
      <button type="button" onClick={changeColor}>Change Color</button>
    </div>
  );
}