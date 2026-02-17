import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems = [], setCartItems }) => {
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }, [cartItems]);

  const updateQty = (id, qty) => {
    if (!setCartItems) return;

    const nextQty = Math.max(1, Number(qty) || 1);
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: nextQty } : item))
    );
  };

  const increaseQty = (id) => {
    if (!setCartItems) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    if (!setCartItems) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    if (!setCartItems) return;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    if (!setCartItems) return;
    setCartItems([]);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold">Your Cart</h1>
          <p className="text-gray-700 mt-2">
            Review your items and proceed to checkout.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Cart Items <span className="text-red-500">({totalItems})</span>
              </h2>

              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-red-500 hover:underline"
                >
                  Clear Cart
                </button>
              )}
            </div>

            {cartItems.length === 0 ? (
              <div className="mt-6 bg-white border rounded-md p-8">
                <p className="text-gray-700">Your cart is empty.</p>
                <Link
                  to="/products"
                  className="inline-block mt-4 bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-600 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border rounded-md p-4 flex gap-4 items-center"
                  >
                    {/* Image */}
                    <div className="h-20 w-20 bg-gray-50 rounded-md overflow-hidden shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Price: <span className="font-semibold">${item.price}</span>
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-semibold text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Qty + total */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="h-9 w-9 border rounded-md font-bold hover:border-red-500 transition"
                          >
                            -
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity || 1}
                            onChange={(e) => updateQty(item.id, e.target.value)}
                            className="w-16 h-9 border rounded-md text-center outline-none focus:border-red-500"
                          />

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="h-9 w-9 border rounded-md font-bold hover:border-red-500 transition"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-gray-600 text-sm">Item Total</p>
                          <p className="font-extrabold text-lg">
                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white border rounded-md p-6 h-fit">
            <h3 className="text-xl font-bold">Order Summary</h3>

            <div className="mt-5 space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">$0.00</span>
              </div>

              <div className="border-t pt-3 flex justify-between text-black">
                <span className="font-bold">Total</span>
                <span className="font-extrabold">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              disabled={cartItems.length === 0}
              className={`mt-6 w-full py-2.5 rounded-md font-semibold transition ${
                cartItems.length === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center mt-3 text-sm font-semibold text-red-500 hover:underline"
            >
              Continue Shopping
            </Link>

            {!setCartItems && (
              <p className="text-xs text-gray-500 mt-4">
                Note: Pass <span className="font-semibold">setCartItems</span> prop to enable
                quantity/update/remove actions.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;