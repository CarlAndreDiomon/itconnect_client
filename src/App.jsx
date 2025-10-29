import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import MobileNavbar from "./components/layout/mobile/MobileNavbar";
import LoginPage from "./pages/loginPage";
import DesktopSidebar from "./components/layout/desktop/DesktopSidebar";

const App = () => {
  return (
    <main className="w-screen h-screen flex bg-gray-50">
      <aside className="hidden lg:flex w-64  bg-white">
        <DesktopSidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="lg:hidden bg-white border-b">
          <MobileNavbar />
        </header>

        <section className="flex-1 overflow-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </section>
      </div>
    </main>
  );
};

export default App;
