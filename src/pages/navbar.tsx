/* import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white w-full h-16 flex items-center justify-between px-10 shadow-md fixed top-0 left-0 z-50">
      <p className="text-2xl font-semibold">Logo.</p>

      <div className="flex items-center gap-8">
        <Link to="/" className="font-semibold">
          Home
        </Link>

        <Link
          to="/contact-us"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
 */

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white w-full h-16 flex items-center justify-between px-10 shadow-md fixed top-0 left-0 z-50">
      <p className="text-2xl font-semibold">Logo.</p>

      <div className="flex items-center gap-8">
        <button onClick={() => scrollTo("home")} className="font-semibold">
          Home
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
