import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Deatails from "../../pages/Deatails";
import NotFound from "../../pages/NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:name" element={<Deatails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
