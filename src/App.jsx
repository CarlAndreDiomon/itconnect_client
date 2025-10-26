import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <div className=" flex  h-screen">
      <h1></h1>
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
