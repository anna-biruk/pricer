import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PolishProductsPage from "../pages/PolishProductsPage";
import BelarussianProductsPage from "../pages/BelarussianProductsPage";
import HomePage from "../pages/HomePage";
import BelarussianProductItemPage from "../pages/BelarussianProductItemPage";
import PolishProductItemPage from "../pages/PolishProductItemPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/belarus/products/:productId">
          <BelarussianProductItemPage />
        </Route>
        <Route path="/poland/products/:productId">
          <PolishProductItemPage />
        </Route>
        <Route path="/polish/products">
          <PolishProductsPage />
        </Route>
        <Route path="/belarus/products">
          <BelarussianProductsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
