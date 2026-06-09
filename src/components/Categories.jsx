import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="bg-[#151521] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-center
            text-white
            mb-14
          "
        >
          Shop by Category
        </h2>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-6
          "
        >
          {categories.map((item) => (
            <div
              key={item.name}
              className="
                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-2xl

                p-6

                text-center

                cursor-pointer

                hover:scale-105
                hover:-translate-y-2

                hover:border-violet-500

                hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]

                transition-all
                duration-300
              "
            >

              <div
                className="
                  text-5xl
                  mb-4
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-white
                  font-semibold
                  text-lg
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  text-slate-400
                  text-sm
                  mt-2
                "
              >
                {item.count}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}