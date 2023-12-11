"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopOrBottom = () => {
    if (isScrolledDown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="bg-gray-700 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl p-5">
          <h1 className="text-center text-white text-3xl font-bold py-5">
            View Weather in AB and BC
          </h1>
          <p className="text-center text-white">
            Select from the list to be redirected for details on the current
            weather of the selected location!
          </p>

          {/* Grid container */}
          <div className="grid grid-cols-2 gap-4">
            {/* Section 1: Alberta */}
            <div className="bg-gray-700 p-5 rounded-lg">
              <h2 className="text-center text-white text-xl font-semibold underline">
                Alberta
              </h2>
              {/* Content for Alberta */}
            </div>

            {/* Section 2: British Columbia */}
            <div className="bg-gray-700 p-5 rounded-lg">
              <h2 className="text-center text-white text-xl font-semibold underline">
                British Columbia
              </h2>
              {/* Content for British Columbia */}
            </div>

            {/* Section 3: Top 5 Cities/Towns in AB */}
            <div className="bg-gray-600 p-5 rounded-lg col-span-1">
              <h2 className="text-center text-white text-xl font-semibold">
                Top 5 Cities/Towns in AB
              </h2>
              <ol className="list-decimal list-inside text-white pl-4">
                {/* Added left padding */}
                <li>
                  <Link href="AB/Banff" className="hover:underline">
                    Banff
                  </Link>
                </li>
                <li>
                  <Link href="AB/Jasper" className="hover:underline">
                    Jasper
                  </Link>
                </li>
                <li>
                  <Link href="AB/Calgary" className="hover:underline">
                    Calgary
                  </Link>
                </li>
                <li>
                  <Link href="AB/Edmonton" className="hover:underline">
                    Edmonton
                  </Link>
                </li>
                <li>
                  <Link href="AB/Lethbridge" className="hover:underline">
                    Lethbridge
                  </Link>
                </li>
              </ol>
            </div>

            {/* Section 4: Top 5 Cities/Towns in BC */}
            <div className="bg-gray-600 p-5 rounded-lg col-span-1">
              <h2 className="text-center text-white text-xl font-semibold">
                Top 5 Cities/Towns in BC
              </h2>
              <ol className="list-decimal list-inside text-white">
                <li>
                  <Link href="BC/Vancouver" className="hover:underline">
                    Vancouver
                  </Link>
                </li>
                <li>
                  <Link href="BC/Victoria" className="hover:underline">
                    Victoria
                  </Link>
                </li>
                <li>
                  <Link href="BC/Whistler" className="hover:underline">
                    Whistler
                  </Link>
                </li>
                <li>
                  <Link href="BC/Kelowna" className="hover:underline">
                    Kelowna
                  </Link>
                </li>
                <li>
                  <Link href="BC/Tofino" className="hover:underline">
                    Tofino
                  </Link>
                </li>
              </ol>
            </div>
          </div>

          {/* Weather Map Container */}
          <div className="flex justify-center pt-5">
            <iframe
              title="Weather Map"
              width="100%"
              height="800"
              className="border-none"
              src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=0&lon=0&zoom=1`}
            ></iframe>
          </div>
        </div>
      </main>

      <button
        onClick={scrollToTopOrBottom}
        className="fixed bottom-5 left-5 bg-green-500 text-white p-2 rounded-md cursor-pointer z-50 hover:bg-green-600"
      >
        {isScrolledDown ? "Scroll to Top" : "Scroll to Bottom"}
      </button>
    </>
  );
}
