import { Route, Routes } from "react-router-dom";
import PortfolioDetails from "./pages/PortfolioDetails";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
    </Routes>
  );
}

export default App;
