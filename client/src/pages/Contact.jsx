import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_NUMBER } from "@/config/data";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const text = `Name: ${formData.name}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/+${PERSONAL_NUMBER}?text=${text}`;

    window.open(url, "_blank");

    setFormData({ name: "", subject: "", message: "" });
    setStatus("success");
    setMessage("Message ready to send via WhatsApp!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-stone-950 p-4">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="h2 text-white text-center text-2xl mb-5 px-6"
      >
        CONTACT US
      </motion.h1>

      <div className="text-white mb-5 text-xs text-center font-mono px-7 w-full">
        <Typewriter
          options={{
            strings: ["DECORATION CONTENT – REACH OUT TO CONNECT!".toUpperCase()],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 60,
          }}
        />
      </div>

      <div className="w-full md:p-8 mx-auto grid lg:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div className="contact-info order-2 lg:order-1 w-full p-5 flex flex-col justify-center">
          {SOCIAL_LINKS.map((cont, idx) => {
            const Icon = cont?.icon;
            return (
              <div key={idx} className="contact-details flex gap-5 mb-5">
                <div className="contact-icon-box flex items-center">
                  <Icon className="text-amber-300" />
                </div>
                <div className="contact-label-box flex flex-col">
                  <span className="contact-label inline-block text-gray-400 text-xs font-mono mb-2">
                    {cont?.type.toUpperCase()}
                  </span>
                  <span
                    className="contact-href inline-block text-white text-sm font-mono hover:text-amber-300 hover:cursor-pointer"
                  >
                    {cont?.label} ↗
                  </span>
                </div>
              </div>
            )
          })}

          <div className="point relative p-2 border border-amber-800 overflow-hidden mt-14">
            <div className="absolute inset-0 border border-amber-400 opacity-30 animate-[spin_4s_linear_infinite]"></div>
            <p className="relative text-xs text-amber-400 tracking-wide font-mono">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#f59e0b] mr-2"></span>
              AVAILABLE FOR WORK - FEEL FREE TO CONTACT ME
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="order-1 lg:order-2 shadow-xl px-3 w-full p-5">
          <form onSubmit={submitForm} className="flex flex-col gap-3 p-3">
            <div>
              <label className="block text-xs font-mono text-amber-200 mb-1">NAME :</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border text-gray-300 text-sm py-4 border-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-amber-200 mb-1">SUBJECT :</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject..."
                className="w-full border text-gray-300 py-4 text-xs border-gray-800 px-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs text-amber-200 mb-1">MESSAGE :</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-800 text-gray-300 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 font-mono text-black py-2 hover:shadow-[0_0_15px_#f59e0b] transition duration-200 cursor-pointer"
            >
              SEND VIA WHATSAPP
            </button>
          </form>

          {message && (
            <div
              className={`text-xs mt-3 text-center leading-relaxed tracking-wide flex items-start justify-center gap-1 max-w-sm mx-auto ${status === "success" ? "text-green-500" : "text-red-600"
                }`}
            >
              <FiAlertTriangle size={15} className="shrink-0 mt-0.5" />
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;