import emailIcon from "../assets/communication.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/pin.png";
import whatappIcon from "../assets/whatsapp.png";
import arrowIcon from "../assets/arrow.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 md:px-10 py-10 -mt-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 mb-18 md:mb-18">
        {/* LEFT SIDE */}
        <div className="bg-[#1e293b] text-white p-8 md:p-12 flex flex-col justify-center">
          <p className="text-sm  tracking-widest text-gray-300 mb-3">
            CONTACT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Plan Your Trip
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Have a destination in mind? Reach out and our travel experts will
            craft the perfect itinerary for you.
          </p>

          {/* Email */}
          <div className="flex items-start gap-3 mb-5">
            <img src={emailIcon} alt="" className="w-5 mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-300">hello@wanderlux.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 mb-5">
            <img src={phoneIcon} alt="" className="w-5 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-300">+91 9387265222</p>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-3">
            <img src={locationIcon} alt="" className="w-5 mt-1" />
            <div>
              <p className="font-semibold">Office</p>
              <p className="text-gray-300">
                245 Fifth Avenue, New York, NY 10016
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 md:p-10">
          <form className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="+91 9387265222"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Tour Packages */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Tour Packages
              </label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black">
                <option>Select Tour Package</option>
                <option>Package 1</option>
                <option>Package 2</option>
                <option>Package 3</option>
                <option>Package 4</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us where you want to go..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white w-full py-2 rounded-xl hover:bg-orange-600 transition font-bold cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="fixed bottom-20 right-4 md:bottom-20 md:right-6 flex flex-col items-center gap-3 md:gap-3 z-50">
        {/* WhatsApp */}
        <img
          src={whatappIcon}
          alt="whatsapp"
          className="w-10 h-10 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition"
          onClick={() => {
            const phoneNumber = "919387265222"; // use country code, no +
            const message = "Hey! I want to book a tour package";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
        />

        {/* Scroll to Top */}
        <img
          src={arrowIcon}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          alt="arrow"
          className="w-10 h-10 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition"
        />
      </div>
    </section>
  );
};

export default Contact;
