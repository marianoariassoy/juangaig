"use client";
import Title from "@/components/title";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loader from "./loading";

interface data {
  id: number;
  text: string;
}

const Diferencia = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/differences";

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
      <Title title="Lo que me diferencia" />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 lg:px-20">
          {data.map((item, index) => (
            <article key={index} className="flex items-center gap-4">
              <div className="w-14">
                <Image
                  src="/assets/Asset-6.svg"
                  alt="Item"
                  className="h-16"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <div className="flex-1 lg:text-xl text-medium text-wrap pr-4">
                {item.text}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Diferencia;
