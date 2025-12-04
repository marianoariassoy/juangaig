import Link from "next/link";

const shortcuts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 lg:mt-30 mb-8">
      <article className="text-center gap-y-4 border-b lg:border-b-0 lg:border-r border-black px-8 lg:pl-0 flex flex-col justify-between items-center pb-4">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl">Conocé más sobre mí</h2>
          <Link
            href={"/sobre-mi"}
            className="hover:underline text-lg leading-5"
          >
            MI EXPERIENCIA Y TRAYECTORIA AQUÍ
          </Link>
        </div>
      </article>
      <article className="text-center gap-y-4 border-b lg:border-b-0 lg:border-r border-black px-8 flex flex-col justify-between items-center pb-4">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl">¿Cómo te puedo ayudar?</h2>
          <Link
            href={"/servicios"}
            className="hover:underline text-lg leading-5"
          >
            CONOCE MÁS SOBRE MIS SERVICIOS AQUÍ
          </Link>
        </div>
      </article>
      <article className="text-center gap-y-4 px-8 flex flex-col justify-between items-center pb-4">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl">Quiero tasar mi propiedad</h2>
          <Link
            href={"/contacto"}
            className="hover:underline text-lg leading-5"
          >
            CONTACTAME AQUÍ
          </Link>
        </div>
      </article>
    </div>
  );
};

export default shortcuts;
