import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Detail from "./pages/detail";
import Schedule from "./pages/schedule";
import Mypage from "./pages/mypage";
import Login from "./pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
