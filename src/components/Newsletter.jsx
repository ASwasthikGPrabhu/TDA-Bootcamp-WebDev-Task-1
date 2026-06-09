export default function Newsletter() {
  return (
    <section
      className="
        bg-gradient-to-r
        from-[#231942]
        via-[#5b21b6]
        to-[#7c3aed]
        py-24
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        <div
          className="
            bg-black/20
            backdrop-blur-md

            border
            border-white/10

            rounded-3xl

            p-8
            md:p-12

            text-center
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl

              font-bold

              text-white
            "
          >
            Stay in the Loop
          </h2>

          <p
            className="
              mt-5

              text-slate-200

              max-w-2xl
              mx-auto

              text-lg
            "
          >
            Subscribe to our newsletter and receive
            exclusive deals, product launches, and
            shopping tips directly in your inbox.
          </p>

          {/* Form */}

          <form
            className="
              mt-10

              grid
              md:grid-cols-4

              gap-4
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-xl

                px-4
                py-3

                text-white

                placeholder:text-slate-500

                focus:outline-none
                focus:border-violet-400
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-xl

                px-4
                py-3

                text-white

                placeholder:text-slate-500

                focus:outline-none
                focus:border-violet-400
              "
            />

            <select
              className="
                bg-[#181825]

                border
                border-[#2e2e42]

                rounded-xl

                px-4
                py-3

                text-white

                focus:outline-none
                focus:border-violet-400
              "
            >
              <option>Interested in...</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Sports</option>
              <option>Home & Garden</option>
              <option>Everything</option>
            </select>

            <button
              type="submit"
              className="
                bg-white

                text-violet-700

                font-bold

                rounded-xl

                px-6
                py-3

                hover:bg-slate-200

                hover:scale-105

                transition-all
                duration-300
              "
            >
              Subscribe
            </button>

          </form>

          <p
            className="
              mt-6

              text-sm
              text-slate-300
            "
          >
            No spam. Ever. Unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
}