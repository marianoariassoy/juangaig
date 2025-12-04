import Title from "@/components/title";
import Image from "next/image";

const Diferencia = () => {
  const data = [
    {
      title: "Más de 15 años de trayectoria en el mercado.",
    },
    {
      title: "Visión integral, actualizada y precisa del sector.",
    },
    {
      title: "¿Compromiso, responsabilidad y atención personalizada.",
    },
    {
      title:
        "Conocimiento, experiencia y una sólida red de contactos a tu favor.",
    },
    {
      title: "Más de 500 operaciones concretadas.",
    },
    {
      title: "Asesoramiento legal y gestión de sucesiones.",
    },
  ];

  return (
    <section className="flex flex-col gap-y-20">
      <Title title="Lo que me diferencia" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-12 lg:px-20">
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
              {item.title}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Diferencia;
