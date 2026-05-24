import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<MainWebsite />}
      />

      <Route
        path="/city/:id"
        element={<CityDetails />}
      />

    </Routes>
  );
}

export default App;