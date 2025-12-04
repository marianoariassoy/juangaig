import Image from "next/image";
import Link from "next/link";

const about = ({ link }: { link: boolean }) => {
  return (
    <div className="w-full aspect-[4/5] lg:aspect-video rounded-3xl relative overflow-hidden">
      <div className="absolute right-4 left-4 lg:right-auto lg:left-12 top-4 lg:top-12 w-3/4 lg:w-[40%] flex flex-col gap-y-2 text-center">
        <div className="font-lora text-xl lg:text-3xl rounded-3xl bg-white/60 backdrop-blur-md p-6 text-wrap italic font-medium">
          ¡Hola! Soy Juan Gaig, corredor inmobiliario y abogado.
        </div>
        <p className="font-lora lg:text-2xl rounded-3xl bg-white/60 backdrop-blur-md p-6 text-wrap italic font-medium">
          Acompaño a las personas en el proceso de venta de sus propiedades con
          conocimiento, escucha y atención personalizada.
        </p>
        {link && (
          <div className="flex justify-center">
            <Link
              href="/sobre-mi"
              className="font-semibold mt-2 bg-white/60 backdrop-blur-md p-2 rounded-3xl hover:bg-black hover:text-white px-6"
            >
              CONOCÉ MÁS SOBRE MÍ
            </Link>
          </div>
        )}
      </div>

      <Image
        src="/images/JG-web-04.webp"
        alt="Juan Gaig Relaciones Inmobiliarias"
        width={1280}
        height={1024}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default about;
