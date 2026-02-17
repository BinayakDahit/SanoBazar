import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaTags, FaMedal } from "react-icons/fa";

const features = [
  {
    title: "Fast Delivery",
    desc: "Fast, safe delivery to your doorstep.",
    icon: <FaTruck className="text-3xl text-white" />,
  },
  {
    title: "Free Shipping",
    desc: "Free shipping on selected orders.",
    icon: <FaTags className="text-3xl text-white" />,
  },
  {
    title: "Best Quality",
    desc: "Premium quality products you’ll love.",
    icon: <FaMedal className="text-3xl text-white" />,
  },
];

// Hero sub-text slider (3 different texts)
const heroSlides = [
  {
    subTitle: "Trending Collections",
    text: "Discover the latest picks curated for everyday comfort and style. Shop what’s new and upgrade your wardrobe today.",
  },
  {
    subTitle: "Limited Time Deals",
    text: "Grab best-selling items at special prices. Fresh deals drop regularly—don’t miss out on your favorites.",
  },
  {
    subTitle: "New Arrivals Weekly",
    text: "From essentials to standout pieces—new items added every week. Find your perfect fit and look.",
  },
];

// Product Categories
const categories = [
  {
    id: 1,
    name: "Men",
    items: 120,
    img: "/images/Men.jpg",
    slug: "men",
  },
  {
    id: 2,
    name: "Women",
    items: 160,
    img: "/images/Women.jpg",
    slug: "women",
  },
  {
    id: 3,
    name: "Shoes",
    items: 80,
    img: "/images/Shoes.jpg",
    slug: "shoes",
  },
  {
    id: 4,
    name: "Accessories",
    items: 60,
    img: "/images/Accessories.jpg",
    slug: "accessories",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aarav K.",
    rating: 5,
    review:
      "Quality is really good and delivery was fast. The fit was perfect and packaging was neat.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Nisha P.",
    rating: 5,
    review:
      "Great collection and prices. Support team helped me quickly with size exchange. Highly recommended.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Rohan S.",
    rating: 4,
    review:
      "Nice products and smooth checkout. Would love more color options, but overall a great experience.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
  },
];

const SectionTitle = ({ title, highlight }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">
      {title} <span className="text-red-500">{highlight}</span>
    </h2>
    <div className="mt-3 h-1 w-14 bg-red-500 mx-auto rounded-full" />
  </div>
);

const Stars = ({ value = 5 }) => (
  <div className="flex justify-center gap-1 mt-3" aria-label={`${value} stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < value ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const activeSlide = heroSlides[slideIndex];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <p className="text-red-500 font-extrabold text-3xl md:text-4xl">
              Sale 20% Off
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
              On <span className="text-black">Everything</span>
            </h1>

            {/* slider sub title + text */}
            <p className="mt-4 text-black font-semibold">{activeSlide.subTitle}</p>
            <p className="text-gray-700 mt-2 leading-relaxed max-w-lg">
              {activeSlide.text}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                to="/products"
                className="inline-block bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
              >
                Shop Now
              </Link>

              {/* slider dots */}
              <div className="flex gap-2 items-center">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === slideIndex ? "bg-red-500" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/Home_rightImg..png" alt="Hero"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY SHOP WITH US */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Why Shop" highlight="With Us" />

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-[#0f1b2a] text-white rounded-md p-8 text-center"
              >
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-gray-200 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="bg-[#e9e9e9] py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/NewArrival.png"
              alt="New Arrivals"
              className="w-full max-w-sm object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-black">#</span>NewArrivals
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Fresh styles just landed. Explore the newest arrivals and pick your
              favorites before they’re gone.
            </p>
            <Link
              to="/products"
              className="inline-block mt-6 bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Product" highlight="Categories" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/products?category=${encodeURIComponent(c.slug)}`}
                className="group border rounded-md overflow-hidden bg-white hover:shadow-lg transition"
              >
                <div className="relative">
                  <img src={c.img} alt={c.name} className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="font-semibold text-sm md:text-base">{c.name}</h3>
                    <span className="text-xs md:text-sm text-gray-600">
                      {c.items}+ items
                    </span>
                  </div>

                  <span className="mt-2 inline-block text-sm text-red-500 font-semibold group-hover:underline">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOUNT OFFER */}
      <section className="bg-[#e9e9e9] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Get Discount Offers</h3>
            <p className="text-gray-700 mt-2">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-md outline-none border border-gray-300 focus:border-red-500"
              />
              <button className="bg-red-500 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (3) */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Customer" highlight="Reviews" />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="border rounded-md bg-white p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-gray-500">Verified Buyer</p>
                  </div>
                </div>

                <Stars value={t.rating} />

                <p className="text-gray-700 mt-4 leading-relaxed">{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl">Sano Bazar </h3>
            <p className="text-gray-300 mt-2">
             Shop smarter with quality essentials and trending styles.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link to="/profile" className="hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">News letter</h4>
            <div className="flex gap-2">
              <input
                className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-300 outline-none focus:border-red-500"
                placeholder="Email"
              />
              <button className="bg-red-500 px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;