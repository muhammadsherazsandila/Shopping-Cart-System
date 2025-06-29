import { useState } from "react";
import Latest from "../components/Latest";
import About from "../components/About";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-transparent">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl leading-14 md:leading-20 font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ">
                Discover the <span className="text-indigo-600">Trends.</span>{" "}
                Shop Smarter with{" "}
                <span className="text-indigo-600">Trendora.</span>
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                From top picks to hidden gems Trendora brings you the latest
                styles and deals, all in one place.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#latest"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's Shop
                </a>
                <Link
                  to={"/about"}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Know us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Latest />
      <About />
    </>
  );
}
