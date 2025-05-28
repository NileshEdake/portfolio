import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b9b0c5ad-5dc9-4c25-b7f7-590e961c3a7b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact</h2>
          <p className="text-gray-300">Let’s connect — I’d love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400 w-6 h-6" />
              <a href="mailto:yogirajbhandare03@gmail.com" className="text-gray-300 hover:text-blue-400 transition">
                yogirajbhandare03@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400 w-6 h-6" />
              <a href="tel:+918605173505" className="text-gray-300 hover:text-blue-400 transition">
                +91 8605173505
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-blue-400 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/yogiraj-bhandare-63a479285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400 w-6 h-6" />
              <span className="text-gray-300">Kolhapur, Maharashtra</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-gray-900 p-6 rounded-xl shadow space-y-4"
            onSubmit={onSubmit}
          >
            <div>
              <label className="text-gray-300 block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label className="text-gray-300 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label className="text-gray-300 block mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
