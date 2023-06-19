import './App.css';
import Counter from './component/Counter';
import FunctionalEvent from './component/FunctionalEvent';
import ClassEvent from './component/ClassEvent';
import FunctionalState from './component/FunctionalState';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Counter />
      <br />
      <FunctionalEvent></FunctionalEvent>
      <br />
      <ClassEvent></ClassEvent>
      <br />
      <FunctionalState></FunctionalState>
    </div>
  );
}

export default App;
