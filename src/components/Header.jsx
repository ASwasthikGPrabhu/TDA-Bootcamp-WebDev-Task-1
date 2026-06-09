import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Products",
    "Deals",
    "About",
    "Contact",
  ];

  return (
    <header className="bg-[#13131d] border-b border-[#2e2e42] shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-violet-400">
              ShopEasy
            </h1>

            <p className="text-xs text-slate-400">
              Your one-stop shop
            </p>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex">

            <input
              type="text"
              placeholder="Search for products..."
              className="
                w-80
                px-4
                py-2
                bg-[#1f1f2e]
                border
                border-[#2e2e42]
                rounded-l-lg
                text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:border-violet-500
              "
            />

            <button
              className="
                bg-violet-600
                hover:bg-violet-700
                px-5
                rounded-r-lg
                font-semibold
                transition-all
                duration-300
              "
            >
              Search
            </button>

          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">

            <div className="flex gap-5 mb-2 justify-end">

              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="
                    text-slate-300
                    hover:text-violet-400
                    transition
                  "
                >
                  {link}
                </a>
              ))}

            </div>

            <div className="flex gap-4 text-sm justify-end">

              <span className="text-slate-400 hover:text-violet-400 cursor-pointer transition">
                Wishlist (0)
              </span>

              <span className="text-violet-400 hover:text-violet-300 cursor-pointer transition">
                Cart (0)
              </span>

              <span className="text-slate-400 hover:text-violet-400 cursor-pointer transition">
                Sign In
              </span>

            </div>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="
              lg:hidden
              text-2xl
              text-violet-400
            "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Search */}

        <div className="flex lg:hidden mt-4">

          <input
            type="text"
            placeholder="Search products..."
            className="
              flex-1
              px-4
              py-2
              bg-[#1f1f2e]
              border
              border-[#2e2e42]
              rounded-l-lg
              text-white
              placeholder:text-slate-400
            "
          />

          <button
            className="
              bg-violet-600
              hover:bg-violet-700
              px-4
              rounded-r-lg
              transition
            "
          >
            Search
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              menuOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              bg-[#181825]
              border
              border-[#2e2e42]
              rounded-xl
              p-4
            "
          >

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="
                    text-slate-300
                    hover:text-violet-400
                    transition
                  "
                >
                  {link}
                </a>
              ))}

            </div>

            <div className="mt-6 border-t border-[#2e2e42] pt-4">

              <div className="flex flex-col gap-3 text-sm">

                <span className="text-slate-400">
                  Wishlist (0)
                </span>

                <span className="text-violet-400">
                  Cart (0)
                </span>

                <span className="text-slate-400">
                  Sign In
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}