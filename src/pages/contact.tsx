import { useState, type FormEvent } from "react";
import emailIcon from "../assets/communication.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/pin.png";
import whatappIcon from "../assets/whatsapp.png";
import arrowIcon from "../assets/arrow.png";

const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [packageError, setPackageError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const formAction = import.meta.env.VITE_FORMSUBMIT_EMAIL
    ? `https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_EMAIL}`
    : "#";

  const isValidForm =
    name.trim().length > 0 &&
    selectedPackage.trim().length > 0 &&
    email.trim().length > 0 &&
    phoneNumber.trim().length > 0 &&
    message.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!selectedPackage) {
      event.preventDefault();
      setPackageError(true);
      setSubmitError("");
      return;
    }

    if (!isValidForm) {
      event.preventDefault();
      setSubmitError("Please fill in all fields before submitting.");
      return;
    }

    setSubmitError("");
  };

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
              <p className="text-gray-300">info@vietjourney360.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 mb-5">
            <img src={phoneIcon} alt="" className="w-5 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-300">+91 7338866011</p>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-3">
            <img src={locationIcon} alt="" className="w-5 mt-1" />
            <div>
              <p className="font-semibold">Office</p>
              <p className="text-gray-300">
                199A, Venkatraman Nagar, 2nd Main, Hasthinapuram, Chennai, 600064
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 md:p-10">
          <form
            action={formAction}
            method="POST"
            target="_blank"
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="_subject" value="New contact request" />
            <input type="hidden" name="_replyto" value={email} />
            <input type="hidden" name="package" value={selectedPackage} />
            <input type="hidden" name="_captcha" value="false" />

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 7338866011"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Tour Packages */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Tour Packages
              </label>
              <select
                name="tour_package"
                value={selectedPackage}
                onChange={(e) => {
                  setSelectedPackage(e.target.value);
                  setPackageError(false);
                }}
                className={`w-full rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black ${packageError ? "border-red-500 ring-1 ring-red-500" : "border border-gray-300"}`}
              >
                <option value="">Select Tour Package</option>
                <option value="Group Tour">Group Tour</option>
                <option value="Custom">Custom Package</option>
                <option value="Package 1">Package 1</option>
                <option value="Package 2">Package 2</option>
                <option value="Package 3">Package 3</option>
                <option value="Package 4">Package 4</option>
              </select>
              {packageError && (
                <p className="mt-2 text-sm text-red-600">
                  Please select a tour package before contacting us.
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us where you want to go..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-600">{submitError}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={!isValidForm}
              className="bg-orange-500 text-white w-full py-2 rounded-xl hover:bg-orange-600 transition font-bold cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
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
            if (!selectedPackage) {
              setPackageError(true);
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }

            const phoneNumber = "918056111314"; // use country code, no +
            const message = `Hey! I want to book the ${selectedPackage} tour package.`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            console.log("Opening WhatsApp with URL:", url);
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
