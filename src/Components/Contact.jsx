import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0411444",
        "template_be3vjso",
        form.current,
        "yQQDTvzt4Nyu5LEJc"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#121212] px-4 py-10 ml-8 mr-8 rounded-2xl flex mt-10 opacity-0"
    >
      {/* Left Panel */}
      <div className="hidden md:flex w-1/4 p-8 bg-gray-950 flex-col justify-center space-y-6">
        <div>
          <h4 className="text-sm uppercase text-gray-400">Contact</h4>
          <h1 className="text-4xl font-extrabold leading-tight">
            Get In <span className="text-indigo-500">Touch</span>
          </h1>
        </div>
        <p className="text-gray-400 text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="text-sm text-gray-300 space-y-4">
          <div className="flex items-start space-x-2">
            <span className="text-indigo-500 text-xl mt-1">📍</span>
            <p>
              Street #12 Ramantapur
              <br />
              Hyderabad, Telangana
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500 text-xl">📞</span>
            <p>+91 7839829836</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500 text-xl">🕒</span>
            <p>24/7</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-800">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-3xl bg-gray-700 p-8 rounded-lg shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-white">
            Send Us a Message
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Lav"
                required
                className="w-full p-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Kusha"
                className="w-full p-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full p-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full p-4 rounded bg-gray-800 text-white border border-gray-600 resize-none focus:outline-none"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              className="accent-indigo-500"
            />
            <label className="text-sm">Send me your newsletter!</label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded transition duration-300"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 font-semibold text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
