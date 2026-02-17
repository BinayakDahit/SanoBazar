import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaShieldAlt, FaTags, FaHeadset } from "react-icons/fa";

const stats = [
  { label: "Happy Customers", value: "10k+" },
  { label: "Products", value: "2k+" },
  { label: "Delivery Cities", value: "50+" },
  { label: "Support", value: "24/7" },
];

const values = [
  {
    title: "Fast Delivery",
    desc: "We partner with reliable delivery services to get your orders to you quickly and safely.",
    icon: <FaTruck className="text-2xl" />,
  },
  {
    title: "Trusted Shopping",
    desc: "Secure checkout and customer-first policies so you can shop with confidence.",
    icon: <FaShieldAlt className="text-2xl" />,
  },
  {
    title: "Best Deals",
    desc: "Great prices, seasonal discounts, and curated offers on quality products.",
    icon: <FaTags className="text-2xl" />,
  },
  {
    title: "Customer Support",
    desc: "Need help? Our team is ready to assist you with orders, returns, and questions.",
    icon: <FaHeadset className="text-2xl" />,
  },
];

const About = () => {
  return (
    <div className="w-full">
      {/* Header / Hero */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 font-semibold">About Sano Bazar</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Simple, Affordable & Reliable Shopping
            </h1>
            <p className="text-gray-700 mt-4 leading-relaxed max-w-xl">
              Sano Bazar is your everyday marketplace for trending fashion,
              essentials, and more. We focus on quality products, fair pricing,
              and a smooth shopping experience—from browsing to delivery.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/products"
                className="px-6 py-2.5 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-md border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              To make online shopping easy and trustworthy for everyone by
              providing a curated selection of products, fast delivery, and
              supportive customer service.
            </p>

            <h3 className="text-xl font-bold mt-6">Our Vision</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              To become a beloved local-first brand that customers rely on for
              everyday needs and new trends—at the right price.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="border rounded-md bg-white p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-3xl font-extrabold text-red-500">
                  {s.value}
                </div>
                <div className="mt-2 text-gray-700 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              Why People Choose <span className="text-red-500">Sano Bazar</span>
            </h2>
            <div className="mt-3 h-1 w-14 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border rounded-md p-6 hover:shadow-lg transition"
              >
                <div className="h-11 w-11 rounded-md bg-red-500 text-white flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Promise */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Promise</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We’re committed to improving your shopping experience with better
              collections, accurate product info, transparent policies, and
              consistent service.
            </p>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">•</span> Quality-focused
                products
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">•</span> Easy returns
                and support
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">•</span> Secure checkout
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">•</span> Reliable
                delivery updates
              </li>
            </ul>

            <Link
              to="/products"
              className="inline-block mt-6 bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Start Shopping
            </Link>
          </div>

          <div className="rounded-md overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1521337706264-a414f153a5ed?w=1200&auto=format&fit=crop&q=60"
              alt="About Sano Bazar"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to find your next favorite item?
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Explore categories, discover new arrivals, and enjoy great deals—only
            at Sano Bazar.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-block bg-red-500 text-white px-7 py-3 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;