import StyleFunctional from './component/StyleFunctional';
import StyleClass from './component/StyleClass';
import StylesheetComponent from './component/StylesheetComponent';
import CssmoduleComponent from './component/CssmoduleComponent';
import TempComponent from './component/TempComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <StyleFunctional></StyleFunctional>
      <StyleClass></StyleClass>
      <StylesheetComponent></StylesheetComponent>
      <CssmoduleComponent></CssmoduleComponent>
      <TempComponent></TempComponent>
    </div>
  );
}

export default App;
