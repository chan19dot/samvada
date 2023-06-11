import { Route, Routes } from "react-router-dom";
import { DASHBOARD } from "./constants";
import { DashBoard } from "../Pages/DashBoard";
import Login from "../Pages/Login";
import { NotFound } from "../Pages/NotFound";
export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route exact path={DASHBOARD} Component={DashBoard} />
        <Route exact path="/" Component={Login} />

        {/* NOT FOUN-404 */}
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
};
