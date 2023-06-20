import { useState } from 'react';

export default function ConditionalFunctional() {

  const [display, setDisplay] = useState(true);

  // first condition way and the worst
  // if (display === true) {
  //   return <h3>This is from Conditional Function</h3>;
  // } else {
  //   return <h3>Nothing is here</h3>;
  // }

  // second condition way and better than the first one
  // this is because here is only one return
  // let output;

  // if (display === true) {
  //   output = <h3>This is from Conditional Function</h3>;
  // } else {
  //   output = <h3>Nothing is here</h3>;
  // }

  // return <div>{output}</div>;

  // the best way to use condition and here is only one return
  // this is ternary condition
  return (
    display ? <h3>This is from Conditional Function</h3> : <h3>Nothing is here</h3>
  );
}