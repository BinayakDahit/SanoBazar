import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to backend / email service
    console.log("Contact Form Data:", form);

    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            We’re Here to Help
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl leading-relaxed">
            Have a question about an order, product, delivery, or returns? Send
            us a message and our support team will get back to you as soon as
            possible.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/products"
              className="px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Explore Products
            </Link>
            <Link
              to="/about"
              className="px-6 py-2.5 rounded-md border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Reach us through the details below or use the contact form.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 items-start p-5 border rounded-md bg-white">
                <div className="h-11 w-11 rounded-md bg-red-500 text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-700">+977-9816559161, 9745631044</p>
                  <p className="text-gray-500 text-sm">Call us for urgent help</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 border rounded-md bg-white">
                <div className="h-11 w-11 rounded-md bg-red-500 text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-700">support@sanobazar.com</p>
                  <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 border rounded-md bg-white">
                <div className="h-11 w-11 rounded-md bg-red-500 text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-700">Nepalgunj, Nepal</p>
                  <p className="text-gray-500 text-sm">Visit our office</p>
                </div>
              </div>
            </div>

            {/* Map (Works reliably using OpenStreetMap embed) */}
            <div className="mt-8 overflow-hidden rounded-md border bg-white">
              <iframe
                title="Sano Bazar Location - Nepalgunj"
                className="w-full h-64"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=81.5866%2C28.0206%2C81.6466%2C28.0806&layer=mapnik&marker=28.0506%2C81.6166"
              ></iframe>
            </div>

            <div className="mt-3">
              <a
                className="text-red-500 font-semibold hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Nepalgunj%2C%20Nepal"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border rounded-md p-6 md:p-8">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="text-gray-700 mt-2">
              Fill out the form below and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-2.5 rounded-md border border-gray-300 outline-none focus:border-red-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                By sending this message, you agree to our{" "}
                <span className="text-red-500 font-semibold">support policy</span>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;