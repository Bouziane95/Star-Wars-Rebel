import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import People from "./pages/People";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import CardPeoples from "./components/CardPeoples";
import CardMovies from "./components/CardMovies";
import CardPlanets from "./components/CardPlanets";
import CardVehicles from "./components/CardVehicles";
import CardStarships from "./components/CardStarships.jsx";
import CardSpecies from "./components/CardSpecies.jsx";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/species" component={Species} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/starships" component={Starships} />
        <Route exact path="/people/:id" component={CardPeoples} />
        <Route exact path="/films/:id" component={CardMovies} />
        <Route exact path="/planets/:id" component={CardPlanets} />
        <Route exact path="/species/:id" component={CardSpecies} />
        <Route exact path="/vehicles/:id" component={CardVehicles} />
        <Route exact path="/starships/:id" component={CardStarships} />
      </Switch>
    </div>
  );
}

export default App;
