"use client";
import { useState, useEffect } from "react";
import Loader from "./loading";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface data {
  id: number;
  title: string;
  text: string;
}

const Confiaron = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/testimonials";

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

  return (
    <div className="w-full  rounded-3xl relative overflow-hidden bg-black/10 p-16 lg:p-20">
      {!loading && data.length > 0 && (
        <div className="absolute right-4 top-6 w-16 bg-black/50 text-white text-sm p-1 text-center rounded-full font-bold tracking-widest z-30">
          {currentSlide + 1}/{data.length}
        </div>
      )}
      <h1 className="font-bold text-center text-2xl lg:text-4xl mb-12">
        Quienes confiaron en mi dicen...
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <Slide
          autoplay={true}
          duration={5000}
          infinite={true}
          pauseOnHover={false}
          arrows={false}
          indicators={true}
          transitionDuration={400}
          slidesToShow={2}
          slidesToScroll={2}
          onChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
        >
          {data.map((item, index) => (
            <article className="text-center flex flex-col px-8" key={index}>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="font-lora text-lg leading-6 italic">{item.text}</p>
            </article>
          ))}
        </Slide>
      )}
    </div>
  );
};

export default Confiaron;
