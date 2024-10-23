import './App.css';
import Greeting from './components/Greeting';
import HelloWorld from './components/HelloWorld';
import MC, { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        <Welcome name="Tomasz" />
        <Welcome name="Janusz"/>
        <Greeting name="Tomaszzzek"/>
        <Greeting name="Tomaszzzek2"/>
        <FC />
        <SC />
        <MC />
        <HelloWorld />
    </div>
  );
}

export default App;
