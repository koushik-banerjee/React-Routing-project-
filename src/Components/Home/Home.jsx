import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero Section */}
      <section className="relative bg-orange-100 rounded-2xl p-8 sm:p-16 overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center sm:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-orange-800 leading-tight">
              Download Now <br />
              <span className="text-gray-700">Your favorite content, instantly.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Experience the future of content delivery in one click.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-white bg-orange-700 rounded-lg hover:bg-orange-800 transition"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>

          {/* Hero Image */}
          <div className="w-full sm:w-96">
            <img
              src="https://images.pexels.com/photos/29352449/pexels-photo-29352449/free-photo-of-tokyo-tower-illuminated-night-skyline-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Tokyo Tower"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <div className="mt-16 text-center">
        <img
          src="https://images.pexels.com/photos/29352449/pexels-photo-29352449/free-photo-of-tokyo-tower-illuminated-night-skyline-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Extra Visual"
          className="mx-auto sm:w-96 w-60 rounded-xl shadow-md"
        />
        <h2 className="mt-8 text-3xl sm:text-5xl font-semibold text-gray-800">
          Explore the city of lights
        </h2>
      </div>
    </div>
  );
}
