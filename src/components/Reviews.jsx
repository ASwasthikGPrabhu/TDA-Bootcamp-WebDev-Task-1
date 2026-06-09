import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="bg-[#12121a] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            What Our Customers Say
          </h2>

          <p
            className="
              mt-4
              text-slate-400
              max-w-2xl
              mx-auto
            "
          >
            Thousands of happy customers trust ShopEasy
            for quality products, fast shipping, and
            excellent customer service.
          </p>

        </div>

        {/* Reviews Grid */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                bg-[#181825]/80
                backdrop-blur-md

                border
                border-[#2e2e42]

                rounded-2xl

                p-6

                hover:scale-105
                hover:-translate-y-2

                hover:border-violet-500

                hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]

                transition-all
                duration-300
              "
            >

              {/* Stars */}

              <div
                className="
                  text-yellow-400
                  text-xl
                  mb-4
                "
              >
                {review.rating}
              </div>

              {/* Review Text */}

              <p
                className="
                  text-slate-300
                  italic
                  leading-relaxed
                  mb-6
                "
              >
                "{review.text}"
              </p>

              {/* Reviewer */}

              <div>

                <h4
                  className="
                    text-white
                    font-semibold
                  "
                >
                  {review.name}
                </h4>

                <span
                  className="
                    inline-block

                    mt-2

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-medium

                    bg-violet-600/20
                    text-violet-300
                    border
                    border-violet-500/30
                  "
                >
                  {review.tag}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}