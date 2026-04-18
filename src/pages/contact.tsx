const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 mt-10 relative">
      <h2 className="text-center text-3xl font-bold">Contact</h2>

      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Let's Plan Your Trip</h2>
        <p className="text-gray-600 mt-3">
          Discover amazing destinations and create unforgettable memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10 px-6">
        {/* Left Side */}
        <div>
          <h3 className="font-bold mb-4">Get in Touch</h3>
          <p>Email: hello@wanderlux.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Office: Mumbai, India</p>
        </div>

        {/* Form */}
        <form className="bg-white p-6 rounded-xl shadow">
          <input
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <input
            placeholder="Contact Number"
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <select className="w-full mb-4 p-3 border rounded-lg">
            <option value="">Select Tour Package</option>
            <option value="goa">Goa Trip</option>
            <option value="manali">Manali Trip</option>
          </select>

          <textarea
            className="w-full mb-4 p-3 border rounded-lg h-32"
            placeholder="Message"
          ></textarea>

          <button className="bg-blue-500 text-white w-full py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col items-center gap-3">
        <img src="/Whatsapp1.png" className="w-55px h-55px" alt="whatsapp" />
        <img src="/Arrow1.png" className="w-55px h-55px" alt="arrow" />
      </div>
    </section>
  );
};

export default Contact;
