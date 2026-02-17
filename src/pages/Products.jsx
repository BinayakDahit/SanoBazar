import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SectionTitle = ({ title, highlight }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">
      {title} <span className="text-red-500">{highlight}</span>
    </h2>
    <div className="mt-3 h-1 w-14 bg-red-500 mx-auto rounded-full" />
  </div>
);

const categories = [
  { id: 1, name: "Men", items: 120, img: "/images/Men.jpg", slug: "men" },
  { id: 2, name: "Women", items: 160, img: "/images/Women.jpg", slug: "women" },
  { id: 3, name: "Shoes", items: 80, img: "/images/Shoes.jpg", slug: "shoes" },
  { id: 4, name: "Accessories", items: 60, img: "/images/Accessories.jpg", slug: "accessories" },
];

// Demo products
const allProducts = [
  { id: 1, name: "Men Shirt", price: 75, category: "men", img: "/images/Men_Shirt.png" },
  { id: 2, name: "Men Jacket", price: 120, category: "men", img: "/images/Men_Jacket.jpg" },
  { id: 3, name: "Women Top", price: 60, category: "women", img: "/images/Women_Top.jpg" },
  { id: 4, name: "Women Dress", price: 90, category: "women", img: "/images/Women_Dress.jpg" },
  { id: 5, name: "Running Shoes", price: 110, category: "shoes", img: "/images/RunningShoes.jpg" },
  { id: 6, name: "Casual Shoes", price: 95, category: "shoes", img: "/images/CasualShoes.jpg" },
  { id: 7, name: "Wrist Watch", price: 140, category: "accessories", img: "/images/WristWatch.png" },
  { id: 8, name: "Sunglasses", price: 45, category: "accessories", img: "/images/Sunglass.jpg" },
];

const Products = ({ onAddToCart = (product) => console.log("ADD TO CART:", product) }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = (searchParams.get("category") || "").toLowerCase();
  const search = (searchParams.get("search") || "").toLowerCase();

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCategory = category ? p.category === category : true;
      const matchSearch = search ? p.name.toLowerCase().includes(search) : true;
      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const setCategory = (slug) => {
    const next = new URLSearchParams(searchParams);
    if (!slug) next.delete("category");
    else next.set("category", slug);
    setSearchParams(next);

    setTimeout(() => {
      document.getElementById("product-list")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="w-full">
      {/* PRODUCT CATEGORIES */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Product" highlight="Categories" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.slug)}
                className="text-left border rounded-lg overflow-hidden bg-white hover:shadow-lg transition"
                type="button"
              >
                <div className="h-44 w-full bg-gray-100">
                  <img src={c.img} alt={c.name} className="w-full h-44 object-cover" />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{c.name}</h3>
                    <span className="text-sm text-gray-600">{c.items}+ items</span>
                  </div>

                  <span className="inline-block mt-2 text-sm text-red-500 font-semibold hover:underline">
                    Explore
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setCategory("")}
              className="inline-block bg-red-500 text-white px-8 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
            >
              View All Categories
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section id="product-list" className="py-12 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-2xl font-bold">
              Products {category ? <span className="text-red-500">({category})</span> : null}
            </h2>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("")}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                  !category ? "bg-red-500 text-white border-red-500" : "bg-white hover:border-red-500"
                }`}
              >
                All
              </button>

              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCategory(c.slug)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    category === c.slug
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white hover:border-red-500"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white border rounded-md p-6 text-gray-700">No products found.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="border rounded-md overflow-hidden bg-white hover:shadow-lg transition flex flex-col"
                >
                  <div className="bg-gray-50 p-4">
                    <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="font-semibold text-sm md:text-base">{p.name}</h3>
                      <span className="font-bold text-sm md:text-base">${p.price}</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <Link
                        to={`/products/${p.id}`}
                        className="text-sm text-red-500 font-semibold hover:underline"
                      >
                        View
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(p)}
                        className="px-3 py-2 text-sm font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;