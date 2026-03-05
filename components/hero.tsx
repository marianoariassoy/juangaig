"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./loading";

interface data {
  id: number;
  text: string;
  image: string;
}

export default function Hero() {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/home";

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [apiURL]);

  const properties = {
    prevArrow: (
      <button className="text-black hover:opacity-60 text-xl cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="text-black hover:opacity-60 text-xl cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  };

  return (
    <div className="w-full relative rounded-3xl overflow-hidden">
      {!loading && data.length > 0 && (
        <div className="absolute right-4 top-6 w-16 bg-black/50 text-white text-sm p-1 text-center rounded-full font-bold tracking-widest z-30">
          {currentSlide + 1}/{data.length}
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Slide
          {...properties}
          autoplay={true}
          duration={5000}
          infinite={true}
          pauseOnHover={false}
          arrows={true}
          indicators={false}
          transitionDuration={400}
          onChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="h-full aspect-[4/5] lg:aspect-video w-full bg-center bg-cover rounded-3xl overflow-hidden relative"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {item.text.length > 0 && (
                <div className="absolute left-4 right-4 lg:left-auto bottom-6 lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[60%] p-8 text-center bg-white/40 backdrop-blur-md font-lora text-xl lg:text-3xl rounded-3xl text-wrap italic font-medium">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
}
