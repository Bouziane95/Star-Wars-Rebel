import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import People from "./pages/People";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Spaceships from "./pages/Spaceships";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import Card from "./components/Card";

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
        <Route exact path="/spaceships" component={Spaceships} />
        <Route exact path="/people/:id" component={Card} />
        <Route exact path="/films/:id" component={Card} />
        <Route exact path="/planets/:id" component={Card} />
        <Route exact path="/species/:id" component={Card} />
        <Route exact path="/vehicles/:id" component={Card} />
        <Route exact path="/spaceships/:id" component={Card} />
      </Switch>
    </div>
  );
}

export default App;
