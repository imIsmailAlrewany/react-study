function FunctionalEvent() {

  // function returnHi() {
  //   console.log('Hi from FunctionalEvent!');
  // }

  const returnHi = () => {
    console.log('Hi from FunctionalEvent!');
  };

  return (
    <div>
      <p>This is FunctionalEvent</p>
      <button onClick={returnHi}>click</button>
    </div>
  );
}

export default FunctionalEvent;