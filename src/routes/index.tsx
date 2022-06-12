import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../pages/start";
import SimplesCalculator from "../pages/simpleCalculator";
import InvalidRoute from "../pages/invalidRoute";

export default function SwitchRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimplesCalculator />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
