import { products } from "../data/products";

export default function Products() {
  return (
    <section className="bg-[#12121a] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            Featured Products
          </h2>

          <a
            href="#"
            className="
              mt-4
              sm:mt-0

              text-violet-400

              hover:text-violet-300

              font-medium

              transition
            "
          >
            View All →
          </a>

        </div>

        {/* Products Grid */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group

                relative

                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-2xl

                overflow-hidden

                hover:scale-105
                hover:-translate-y-2

                hover:border-violet-500

                hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]

                transition-all
                duration-300
              "
            >

              {/* Badge */}

              {product.badge && (
                <span
                  className={`
                    absolute
                    top-4
                    left-4
                    z-10

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                    text-white

                    ${
                      product.badge === "Best Seller"
                        ? "bg-violet-600"
                        : product.badge === "New"
                        ? "bg-emerald-600"
                        : "bg-rose-600"
                    }
                  `}
                >
                  {product.badge}
                </span>
              )}

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-56
                    w-full
                    object-cover

                    group-hover:scale-110

                    transition-transform
                    duration-500
                  "
                />

              </div>

              {/* Content */}

              <div className="p-5">

                <div
                  className="
                    text-yellow-400
                    text-sm
                    mb-2
                  "
                >
                  {product.rating}

                  <span
                    className="
                      text-slate-400
                      ml-2
                    "
                  >
                    ({product.reviews})
                  </span>
                </div>

                <h3
                  className="
                    text-white
                    font-semibold
                    text-lg
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-slate-400
                    text-sm
                    mt-2
                    min-h-[40px]
                  "
                >
                  {product.desc}
                </p>

                {/* Price */}

                <div className="mt-4">

                  <span
                    className="
                      text-violet-400
                      text-2xl
                      font-bold
                    "
                  >
                    ${product.price}
                  </span>

                  {product.oldPrice && (
                    <span
                      className="
                        ml-2
                        text-slate-500
                        line-through
                      "
                    >
                      ${product.oldPrice}
                    </span>
                  )}

                </div>

                {/* Button */}

                <button
                  className="
                    w-full
                    mt-5

                    bg-violet-600

                    hover:bg-violet-700

                    py-3

                    rounded-xl

                    font-semibold

                    text-white

                    transition-all
                    duration-300
                  "
                >
                  Add to Cart
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}