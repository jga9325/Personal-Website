import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Route path="/" exact component={Header} />
      <Route path="/aboutme" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/contactme" component={Contact} />
    </Router>
  );
}

export default App;
