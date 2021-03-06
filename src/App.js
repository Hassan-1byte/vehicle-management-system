import "../src/scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/home-page";
import Order from "./pages/order-page/Order";
import OrderList from "./pages/order-page/OrderList";
import AddOrder from "./pages/order-page/AddOrder";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Layout>
            <Route path="/" exact>
              <Homepage />
            </Route>

            <Route path="/order" exact>
              <Order />
            </Route>

            <Route path="/order/orderlist" exact>
              <OrderList />
            </Route>

            <Route path="/order/addorder" exact>
              <AddOrder />
            </Route>
          </Layout>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
