
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search";
import Details from "./components/details";
import Home from "./components/Home";
import SearchMeals from "./components/search_meal";
import MealDetails from "./components/details_meal";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route
            exact={true}
            // determine what should appears with specified url
            path={["/"]}>
            <Home/>
        </Route>
        <Route
            exact={true}
            path={["/search", "/search/:title"]}>
            {/*<Search/>*/}
            <SearchMeals/>
        </Route>
        <Route
            exact={true}
            path={["/details/:imdbID"]}>
            {/*<Details/>*/}
            <MealDetails/>
        </Route>
      </BrowserRouter>


    </div>
  );
}

export default App;
