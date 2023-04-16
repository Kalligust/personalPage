import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Activity from "./Pages/Activity";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
            <Route path="/act">
              <Activity />
            </Route>
      </Switch>
    </div>
  );
}

export default App;
