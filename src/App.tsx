import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

import CityDetails from "./pages/citydetails/CityDetails";

function MainWebsite() {
  return (
    <>
      <Navbar />

      <Home />

      <Contact />

      <Footer />
    </>
  );
}

function CityDetailsPage() {
  return (
    <>
      <Navbar />
      <CityDetails />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Routes>

      <Route
        path="/"
        element={<MainWebsite />}
      />

      <Route
        path="/city/:id"
        element={<CityDetailsPage />}
      />

    </Routes>
  );
}

export default App;