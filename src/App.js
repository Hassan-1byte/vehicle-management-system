import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

import "../src/scss/style.scss";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Homepage />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
