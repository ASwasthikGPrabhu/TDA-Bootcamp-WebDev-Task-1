import { features } from "../data/features";

export default function Features() {
  return (
    <section className="bg-[#0f0f14] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-14">

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            Why Shop With ShopEasy?
          </h2>

          <p
            className="
              mt-4
              text-slate-400
              max-w-2xl
              mx-auto
            "
          >
            Experience secure shopping, lightning-fast
            delivery, and customer-first service designed
            for modern shoppers.
          </p>

        </div>

        {/* Features Grid */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-2xl

                p-8

                hover:scale-105
                hover:-translate-y-2

                hover:border-violet-500

                hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]

                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  text-5xl
                  mb-5
                "
              >
                {feature.icon}
              </div>

              {/* Title */}

              <h3
                className="
                  text-white
                  text-xl
                  font-semibold
                  mb-3
                "
              >
                {feature.title}
              </h3>

              {/* Description */}

              <p
                className="
                  text-slate-400
                  leading-relaxed
                "
              >
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}