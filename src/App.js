import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Activity from "./Pages/Activity";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/1">
          <Activity side={"left"} />
        </Route>
        <Route path="/2">
          <Activity side={"right"} />
        </Route>
        <Route path="/3">
          <Activity side={"left"} />
        </Route>
        <Route path="/4">
          <Activity side={"right"} />
        </Route>
        <Route path="/5">
          <Activity side={"left"} />
        </Route>
        <Route path="/6">
          <Activity side={"right"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
