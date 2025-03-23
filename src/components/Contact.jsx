import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300 scroll-mt-16 px-6"
    >
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch
          <div className="bg-slate-900 dark:bg-white h-[4px] mt-2"></div>
        </h2>
        <div className="mt-10 mx-20 grid md:grid-cols-2 gap-6 text-gray-900 dark:text-white">
          <div className="flex flex-col items-center space-y-2">
            <Mail size={32} />
            <p>jyotish####@gmail.com</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Phone size={32} />
            <p>+91 62022#####</p>
          </div>
          <div className="flex flex-col items-center space-y-2"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
