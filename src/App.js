import './App.css';
import Greeting from './components/Greeting';
import HelloWorld from './components/HelloWorld';
import MC, { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent';
import Student from './components/Student';
import Welcome from './components/Welcome';

function App() {
  const student = {
    firstName: "Tomasz",
    lastName: "Antosik",
    email: "asasas"
  }
  const skills = ['Html', 'css', 'javascript'];

  return (
    <div className="App">
        {/* <Welcome name="Tomasz" />
        <Welcome name="Janusz"/>
        <Greeting name="Tomaszzzek"/>
        <Greeting name="Tomaszzzek2"/>
        <FC />
        <SC />
        <MC />
        <HelloWorld /> */}
        <Student data = {skills} />
        <Student 
          firstName = "Andrew"
          lastName = "Kobułka"
          email= "sadasd"
        />
    </div>
  );
}

export default App;
