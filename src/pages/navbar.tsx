import wanderLogo from "../assets/wander.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white w-full h-18 flex items-center justify-between px-10 shadow-md fixed top-0 left-0 z-50">
      <p className="text-xl font-semibold flex items-center">
        <img src={wanderLogo} className="w-22 h-22 mt-4" alt="wanderlogo"></img>
        <span className="text-blue-500">Wander</span>
        <span className="text-[#4CAF50]">lux</span>
      </p>
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
