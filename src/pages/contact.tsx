import emailIcon from "../assets/communication.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/pin.png";
import whatappIcon from "../assets/whatsapp.png";
import arrowIcon from "../assets/arrow.png";

const Contact = () => {
  return (
    // <section id="contact" className="py-16 bg-gray-100 mt-10 relative">
    <section id="contact" className="py-8 relative mb-24">
      <h1 className="text-center text-3xl font-bold">Contact Us</h1>

      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Let's Plan Your Trip</h2>
        <p className="text-gray-600 mt-4 text-xl">
          Have a destination in mind? Reach out and our travel experts will
          craft the perfect itinerary for you.{" "}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto  px-6">
        {/* Left Side */}
        <div className="mt-40">
          <h3 className="font-bold mb-6 text-2xl">Get in Touch</h3>
          <p className="flex items-center gap-3 text-xl mb-4">
            <img src={emailIcon} alt="email" className="w-6 h-6" />
            <span>Email : hello@wanderlux.com</span>
          </p>
          <p className="flex items-center gap-3 text-xl mb-4">
            <img src={phoneIcon} alt="email" className="w-6 h-6" />
            <span>Phone: +91 9876543210</span>
          </p>
          <p className="flex items-center gap-3 text-xl mb-4">
            <img src={locationIcon} alt="email" className="w-6 h-6" />
            <span>Office: 245 Fifth Avenue, New York, NY 10016</span>
          </p>
        </div>

        {/* Form */}
        <form className="bg-white w-160  p-8 rounded-2xl shadow-xl">
          <label className="text-xl font-bold mb-2 mt-4 block">Email</label>
          <input
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <label className="text-xl font-bold mb-2 block">Contact Number</label>
          <input
            placeholder="Contact Number"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <label className="text-xl font-bold mb-2 block">Tour Packages</label>
          <select className="w-full mb-4 p-3 border rounded-lg">
            <option value="">Select Tour Package</option>
            <option value=" ">Package 1</option>
            <option value=" ">Package 2</option>
            <option value=" ">Package 3</option>
            <option value=" ">Package 4</option>
            <option value=" ">Package 5</option>
          </select>
          <label className="text-xl font-bold mb-2 block">Message</label>
          <textarea
            className="w-full mb-4 p-3 border rounded-lg h-32"
            placeholder="Message"
          ></textarea>
          <button className="bg-blue-500 text-white w-full font-bold text-xl py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-20 right-6 flex flex-col items-center gap-3">
        <img src={whatappIcon} className="w-10 h-10" alt="whatsapp" />
        <img
          src={arrowIcon}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 cursor-pointer"
          alt="arrow"
        />
      </div>
    </section>
  );
};

export default Contact;
