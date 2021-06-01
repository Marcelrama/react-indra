import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header/header.tsx";
import InitPage from "../Views/initPage/initPage";
import SelectPlan from "../Views/select-plan/selectPlan";
import DetailsCars from "../Views/detailsCars/detailsCars";

export const AppRouter = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/seleciona-plan">
          <SelectPlan />
        </Route>
        <Route path="/detalles-carro">
          <DetailsCars />
        </Route>
        <Route path="/">
          <InitPage />
        </Route>
      </Switch>
    </Router>
  );
};
