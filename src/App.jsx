import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import LoginPage from "./pages/loginPage";

const App = () => {
  return (
    <main className=" w-screen flex flex-col h-screen bg-gray-50">
      <header className="h-14 bg-white border-b flex items-center justify-between ">
        <Navbar />
      </header>

      <section className="flex-1 overflow-auto ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
