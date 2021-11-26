import "../src/scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/home-page";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Layout>
            <Route path="/" exact>
              <Homepage />
            </Route>
          </Layout>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
