import { deals } from "../data/deals";

export default function Deals() {
  return (
    <section className="bg-gradient-to-b from-[#13131d] to-[#1a1630] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
            "
          >
            Flash Deals
          </h2>

          <div
            className="
              mt-4
              md:mt-0

              text-red-400

              font-semibold
              text-lg
            "
          >
            Ends In: 04:32:18
          </div>

        </div>

        {/* Table Wrapper */}

        <div
          className="
            overflow-x-auto

            rounded-2xl

            border
            border-[#2e2e42]

            bg-[#181825]
          "
        >

          <table className="w-full min-w-[900px]">

            {/* Table Head */}

            <thead>

              <tr className="bg-violet-700 text-white">

                <th className="text-left px-6 py-4">
                  Product
                </th>

                <th className="text-left px-6 py-4">
                  Original Price
                </th>

                <th className="text-left px-6 py-4">
                  Sale Price
                </th>

                <th className="text-left px-6 py-4">
                  Discount
                </th>

                <th className="text-left px-6 py-4">
                  Stock
                </th>

                <th className="text-left px-6 py-4">
                  Action
                </th>

              </tr>

            </thead>

            {/* Table Body */}

            <tbody>

              {deals.map((deal, index) => (
                <tr
                  key={index}
                  className="
                    border-b
                    border-[#2e2e42]

                    hover:bg-[#232338]

                    transition-all
                    duration-300
                  "
                >

                  <td className="px-6 py-5 text-white font-medium">
                    {deal.product}
                  </td>

                  <td
                    className="
                      px-6
                      py-5

                      text-slate-500

                      line-through
                    "
                  >
                    {deal.original}
                  </td>

                  <td
                    className="
                      px-6
                      py-5

                      text-violet-400

                      font-bold
                      text-lg
                    "
                  >
                    {deal.sale}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className="
                        bg-rose-600

                        px-3
                        py-1

                        rounded-full

                        text-sm
                        text-white
                        font-semibold
                      "
                    >
                      {deal.discount}
                    </span>

                  </td>

                  <td
                    className="
                      px-6
                      py-5

                      text-slate-300
                    "
                  >
                    {deal.stock}
                  </td>

                  <td className="px-6 py-5">

                    <button
                      className="
                        bg-violet-600

                        hover:bg-violet-700

                        px-5
                        py-2

                        rounded-xl

                        font-semibold

                        text-white

                        hover:scale-105

                        transition-all
                        duration-300
                      "
                    >
                      Grab Deal
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}