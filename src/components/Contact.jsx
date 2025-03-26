import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;
      const response = await axios.post(process.env.REACT_APP_API_URL, {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setAlert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setAlert("Something went wrong!");
      }
    } catch (error) {
      setAlert("Failed to send message!");
    }

    setIsSubmitting(false);
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <section
      id="contact"
      className="h-fit py-6 bg-gray-200 dark:bg-gray-900 transition-all duration-300 scroll-mt-16 px-6"
    >
      <div className="mx-auto text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch
          <div className="bg-slate-900 dark:bg-white h-[4px] mt-2"></div>
        </h2>

        <div className="mt-10 mx-20 grid md:grid-cols-2 gap-6 text-gray-900 dark:text-white">
          <a
            href={`mailto:${process.env.EMAIL}`}
            className="underline flex flex-col items-center space-y-2 text-blue-600 cursor-pointer"
          >
            <Mail size={32} />
            <p>{process.env.EMAIL}</p>
          </a>
          <a
            href={`tel:${process.env.MOB_NO}`}
            className="underline  flex flex-col items-center space-y-2 text-blue-600 cursor-pointer"
          >
            <Phone size={32} />
            <p>{process.env.MOB_NO}</p>
          </a>
        </div>
        {alert && (
          <div className="h-auto w-auto border-0 rounded-2xl p-2 mt-3 bg-green-400 text-black">
            {alert}
          </div>
        )}
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
            disabled={isSubmitting}
            className={`w-full text-white font-semibold py-3 rounded-lg transition duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
