import Title from "@/components/title";
import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";

const Contacto = () => {
  return (
    <section>
      <Title title="¿Seguimos en contacto?" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:px-20 gap-4">
        <article className="text-center gap-y-4  border-b lg:border-b-0 lg:border-r border-black px-10 flex flex-col justify-between items-center py-2 pb-8">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Image
                src="/assets/Asset-7.svg"
                alt="Ayudar"
                className="h-16"
                width={70}
                height={70}
              />
            </div>
            <h2 className="font-bold text-2xl leading-7">
              Recibí en tu e-mail las últimas novedades
            </h2>
            <Form />
          </div>
        </article>
        <article className="text-center gap-y-4 px-10 flex flex-col justify-between items-center py-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Image
                src="/assets/Asset-8.svg"
                alt="Ayudar"
                className="h-16"
                width={70}
                height={70}
              />
            </div>
            <h2 className="font-bold text-2xl leading-7">
              Si estás pensando en vender o querés saber cuánto vale tu
              propiedad hoy, hablemos.
            </h2>
            <div className="flex justify-center">
              <button className="bg-black rounded-full px-8 font-bold py-2 cursor-pointer text-white border border-black hover:bg-white hover:text-black leading-4 mt-4">
                QUIERO TASA <br /> MI PROPIEDAD
              </button>
            </div>
          </div>
        </article>
      </div>

      <div className="flex justify-center mt-16">
        <Link
          href="/contacto"
          className="bg-black rounded-full px-8 font-bold py-2 cursor-pointer text-white border border-black hover:bg-white hover:text-black text-lg lg:text-2xl"
        >
          CONECTEMOS
        </Link>
      </div>
    </section>
  );
};

export default Contacto;
