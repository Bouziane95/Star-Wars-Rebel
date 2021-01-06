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

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/films" component={Films} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/spaceships" component={Spaceships} />
      </Switch>
    </div>
  );
}

export default App;
