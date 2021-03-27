import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Search from "./components/search";
import Details from "./components/details";

function App() {
  return (
    <div className="App">
      <Search/>
      <Details/>
    </div>
  );
}

export default App;
