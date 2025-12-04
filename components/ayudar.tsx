import Title from "@/components/title";
import Link from "next/link";
import Image from "next/image";

const Ayudar = () => {
  return (
    <section>
      <Title title="¿Cómo puedo ayudarte?" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-4">
        <article className="text-center gap-y-4 lg:h-[400px] border-b lg:border-b-0 lg:border-r border-black px-10 lg:pl-0 flex flex-col justify-between items-center py-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Image
                src="/assets/Asset-3.svg"
                alt="Ayudar"
                className="h-16"
                width={70}
                height={70}
              />
            </div>
            <h2 className="font-bold text-2xl leading-7">
              ¿Querés vender tu propiedad?
            </h2>
            <p className="font-medium leading-5">
              Desde la tasación hasta la firma, te acompaño en cada paso con una
              estrategia diseñada especialmente para vos.
            </p>
          </div>
          <Link
            href="/servicios"
            className="hover:underline uppercase font-bold text-lg my-4"
          >
            Conoce más
          </Link>
        </article>
        <article className="text-center gap-y-4 lg:h-[400px] border-b lg:border-b-0 lg:border-r border-black px-10 flex flex-col justify-between items-center py-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Image
                src="/assets/Asset-4.svg"
                alt="Ayudar"
                className="h-16"
                width={70}
                height={70}
              />
            </div>
            <h2 className="font-bold text-2xl leading-7">
              ¿Querés alquilar tu propiedad?
            </h2>
            <p className="font-medium leading-5">
              Trabajo con criterio, responsabilidad y una mirada profesional
              para proteger tu inversión y garantizarte tranquilidad.
            </p>
          </div>
          <Link
            href="/servicios"
            className="hover:underline uppercase font-bold text-lg my-4"
          >
            Conoce más
          </Link>
        </article>
        <article className="text-center gap-y-4 lg:h-[400px] px-10 flex flex-col justify-between items-center py-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Image
                src="/assets/Asset-5.svg"
                alt="Ayudar"
                className="h-16"
                width={70}
                height={70}
              />
            </div>
            <h2 className="font-bold text-2xl leading-7">
              ¿Necesitás hacer una sucesión en CABA?
            </h2>
            <p className="font-medium leading-5">
              Me especializo en iniciar, gestionar y concluir procesos
              sucesorios. Si necesitás asesoramiento, iniciar o destrabar una
              situación hereditaria, hablemos.
            </p>
          </div>
          <Link
            href="/servicios"
            className="hover:underline uppercase font-bold text-lg my-4"
          >
            Conoce más
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Ayudar;
