const confiaron = () => {
  const data = [
    {
      author: "PABLO KANTEREWICZ",
      quote:
        "Hemos contratado a la inmobiliaria de Juan Gaig para la venta de un departamento. Quedamos muy satisfechos con sus servicios. Calidez y profesionalismo. Muy recomendable.",
    },
    {
      author: "CAMILO JOEL KLEINMAN",
      quote:
        "Recomiendo 100% a Juan Gaig. Buena gestión y claridad en todas las operaciones. Muy atento a nuestras necesidades y muy cálido en el trato.",
    },
  ];

  return (
    <div className="w-full lg:aspect-video rounded-3xl relative overflow-hidden bg-black/10 p-16 lg:p-20">
      <div className="absolute right-6 top-6 w-14 bg-black/50 text-white text-sm p-1 text-center rounded-full font-bold tracking-widest">
        1/3
      </div>
      <h1 className="font-bold text-center text-2xl lg:text-4xl">
        Quienes confiaron en mi dicen...
      </h1>
      <div className="mt-8 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:px-20">
        {data.map((item, index) => (
          <article className="text-center flex flex-col" key={index}>
            <h3 className="font-bold text-xl">{item.author}</h3>
            <p className="font-lora text-lg leading-6 italic">{item.quote}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default confiaron;
