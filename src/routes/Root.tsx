import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { RoutePath } from "./root.config";
import App from "../App";
import { NotFoundPage } from "../components/pages/NotFoundPage/NotFoundPage";
import { VariablesPage } from "../components/pages/VariablesPage/VariablesPage";
import { HomePage } from "../components/pages/HomePage/HomePage";
import { VariableDetailesPage } from "../components/pages/VariableDetailePage/VariableDetailesPage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutePath.Default} element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path={RoutePath.Home}
            element={<Navigate to={RoutePath.Default} replace />}
          />

          <Route path={RoutePath.Variables} element={<VariablesPage />} />
          <Route
            path={RoutePath.VariableDetailes}
            element={<VariableDetailesPage />}
          />

          <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
