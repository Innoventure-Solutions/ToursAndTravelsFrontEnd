import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

import CityDetails from "./pages/citydetails/CityDetails";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | VietJourney 360</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist.
        </p>
      </section>
      <Footer />
    </>
  );
}

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

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;