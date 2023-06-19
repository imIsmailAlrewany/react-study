import { useState } from "react"; // hook

function FunctionalState() {

  // this is how we use useState hook
  // inside the array we put the property which is counter here
  // second we put the method or function that will use to deal with this State
  // just take a look at it, This is exactly what we did in class base component
  // counter is the property inside the constructor
  // setCounter is the function or method that control the State
  // and finally we don't or we won't need to use setState it's just in class here is useState (hook)
  const [counter, setCounter] = useState(0);

  // const increment = () => setCounter(counter + 1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>This is counter from Functional base</p>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default FunctionalState;