"use client";
import Title from "@/components/title";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loader from "./loading";

interface data {
  id: number;
  text_home: string;
  title_home: string;
  image: string;
}

const Ayudar = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/services";

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
    <section className="flex flex-col gap-y-20">
      <Title title="¿Cómo puedo ayudarte?" />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-6 gap-4 [&>article:last-child]:border-0">
          {data.map((item, index) => (
            <article
              className="text-center gap-y-4 lg:h-[400px] border-b lg:border-b-0 lg:border-r border-black px-10 lg:pl-0 flex flex-col justify-between items-center py-2"
              key={index}
            >
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt="Ayudar"
                    className="h-16"
                    width={70}
                    height={70}
                  />
                </div>
                <h2 className="font-bold text-2xl leading-7">
                  {item.title_home}
                </h2>
                <p className="font-medium leading-5">{item.text_home}</p>
              </div>
              <Link
                href="/services"
                className="hover:underline uppercase font-bold text-lg my-4"
              >
                Conoce más
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Ayudar;
