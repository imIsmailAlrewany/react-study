import ConditionalFunctional from './component/ConditionalFunctional';
import ConditionalClass from './component/ConditionalClass';
import MapFunctional from './component/MapFunctional';
import MapClass from './component/MapClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <ConditionalFunctional></ConditionalFunctional>
      <ConditionalClass></ConditionalClass>
      <MapFunctional></MapFunctional>
      <MapClass></MapClass>
    </div>
  );
}

export default App;
