import ClassForm from './component/ClassForm';
import FunctionalForm from './component/FunctionalForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h3>This is from ClassForm</h3>
        <ClassForm></ClassForm>
      </div>
      <div>
        <h3>This is from FunctionalForm</h3>
        <FunctionalForm></FunctionalForm>
      </div>
    </div>
  );
}

export default App;
