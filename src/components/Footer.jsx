import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b11] border-t border-[#2e2e42]">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5

            gap-8
          "
        >

          {/* ShopEasy */}

          <div className="col-span-2 md:col-span-1">

            <h3
              className="
                text-violet-400
                text-lg
                font-bold
                mb-4
              "
            >
              ShopEasy
            </h3>

            <p
              className="
                text-slate-400
                text-sm
                leading-relaxed
              "
            >
              Your trusted online marketplace since 2020.
              Quality products, fast delivery, and unbeatable
              prices.
            </p>

            {/* Socials */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                mt-5
              "
            >

              <div className="flex gap-3 mt-5">

                <a
                    href="#"
                    className="
                    bg-[#181825]
                    border
                    border-[#2e2e42]

                    p-3
                    rounded-xl

                    text-slate-300

                    hover:text-blue-400
                    hover:border-blue-400

                    hover:scale-110

                    transition-all
                    duration-300
                    "
                >
                    <FaFacebookF size={18} />
                </a>

                <a
                    href="#"
                    className="
                    bg-[#181825]
                    border
                    border-[#2e2e42]

                    p-3
                    rounded-xl

                    text-slate-300

                    hover:text-sky-400
                    hover:border-sky-400

                    hover:scale-110

                    transition-all
                    duration-300
                    "
                >
                    <FaXTwitter size={18} />
                </a>

                <a
                    href="#"
                    className="
                    bg-[#181825]
                    border
                    border-[#2e2e42]

                    p-3
                    rounded-xl

                    text-slate-300

                    hover:text-pink-400
                    hover:border-pink-400

                    hover:scale-110

                    transition-all
                    duration-300
                    "
                >
                    <FaInstagram size={18} />
                </a>

                <a
                    href="#"
                    className="
                    bg-[#181825]
                    border
                    border-[#2e2e42]

                    p-3
                    rounded-xl

                    text-slate-300

                    hover:text-red-500
                    hover:border-red-500

                    hover:scale-110

                    transition-all
                    duration-300
                    "
                >
                    <FaYoutube size={18} />
                </a>

                </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4
              className="
                text-violet-400

                text-sm
                uppercase
                tracking-wider

                font-semibold

                mb-4
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-2">

              {[
                "Home",
                "Products",
                "Flash Deals",
                "New Arrivals",
                "Best Sellers",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-slate-400
                      text-sm

                      hover:text-violet-400

                      transition
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Customer Service */}

          <div>

            <h4
              className="
                text-violet-400

                text-sm
                uppercase
                tracking-wider

                font-semibold

                mb-4
              "
            >
              Customer Service
            </h4>

            <ul className="space-y-2">

              {[
                "My Account",
                "Track Order",
                "Returns",
                "FAQs",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-slate-400
                      text-sm

                      hover:text-violet-400

                      transition
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4
              className="
                text-violet-400

                text-sm
                uppercase
                tracking-wider

                font-semibold

                mb-4
              "
            >
              Company
            </h4>

            <ul className="space-y-2">

              {[
                "About Us",
                "Careers",
                "Press",
                "Blog",
                "Affiliate Program",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-slate-400
                      text-sm

                      hover:text-violet-400

                      transition
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4
              className="
                text-violet-400

                text-sm
                uppercase
                tracking-wider

                font-semibold

                mb-4
              "
            >
              Contact
            </h4>

            <div
              className="
                text-slate-400
                text-sm
                space-y-2
              "
            >
              <p>123 Market Street</p>
              <p>San Francisco, CA</p>
              <p>(555) 123-4567</p>
              <p>support@shopeasy.com</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div
        className="
          border-t
          border-[#2e2e42]
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            py-5

            flex
            flex-wrap

            justify-between
            items-center

            gap-4
          "
        >

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            © 2024 ShopEasy. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >

            {[
              "Privacy Policy",
              "Terms",
              "Cookies",
              "Sitemap",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-xs
                  text-slate-500

                  hover:text-violet-400

                  transition
                "
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}