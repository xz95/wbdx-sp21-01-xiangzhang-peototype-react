
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search";
import Details from "./components/details";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route
            exact={true}
            path={["/", "search", "/search/:title"]}>
        </Route>
        <Route
            exact={true}
            path={["/details/:imdbID"]}>
        </Route>
      </BrowserRouter>
      <Search/>
      <Details/>
    </div>
  );
}

export default App;
