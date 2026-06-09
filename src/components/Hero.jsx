import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
            y: 60,
            duration: 1,
            ease: "power3.out",
            });
        });

        return () => ctx.revert();
    }, []);

  const stats = [
    ["50K+", "Products"],
    ["1M+", "Happy Customers"],
    ["4.8", "Avg Rating"],
    ["24/7", "Support"],
  ];

  return (
    <section ref={heroRef}
      className="
        bg-gradient-to-r
        from-[#0f0f14]
        via-[#181825]
        to-[#231942]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Hero Content */}

        <div className="text-center">

          <span
            className="
              inline-block
              bg-violet-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              shadow-lg
              shadow-violet-600/30
            "
          >
            Summer Sale — Up to 60% Off
          </span>

          <h1
            className="
              mt-8
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            Everything you need,
            <br />

            <span className="text-violet-400">
              delivered fast.
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-slate-300
              text-lg
              md:text-xl
            "
          >
            Shop thousands of products at unbeatable prices.
            Discover the latest arrivals and enjoy premium
            shopping experiences with fast delivery.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <button
              className="
                bg-violet-600
                hover:bg-violet-700

                px-8
                py-4

                rounded-xl

                font-semibold

                shadow-lg
                shadow-violet-600/30

                hover:scale-105

                transition-all
                duration-300
              "
            >
              Shop Now
            </button>

            <button
              className="
                border
                border-violet-400

                text-violet-300

                px-8
                py-4

                rounded-xl

                hover:bg-violet-600
                hover:text-white

                hover:scale-105

                transition-all
                duration-300
              "
            >
              View Deals
            </button>
          </div>

        </div>

        {/* Stats */}

        <div
          className="
            mt-20

            border-t
            border-[#2e2e42]

            pt-10

            grid
            grid-cols-2
            md:grid-cols-4

            gap-8
          "
        >
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="
                text-center

                hover:scale-105

                transition-all
                duration-300
              "
            >
              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-bold

                  text-violet-400
                "
              >
                {number}
              </h3>

              <p
                className="
                  mt-2
                  text-slate-400
                "
              >
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}