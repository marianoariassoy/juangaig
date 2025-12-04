import Image from "next/image";

const hero = () => {
  return (
    <div className="w-full aspect-[4/5] lg:aspect-video rounded-3xl relative overflow-hidden">
      <div className="absolute right-4 top-6 w-14 bg-black/50 text-white text-sm p-1 text-center rounded-full font-bold tracking-widest">
        1/3
      </div>
      <div className="absolute left-4 right-4 lg:left-auto bottom-6 lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[60%] p-8 text-center bg-white/40 backdrop-blur-md font-lora text-xl lg:text-3xl rounded-3xl text-wrap italic font-medium">
        “Vender una propiedad no es solo una operación: es una decisión
        importante que merece ser acompañada con compromiso y claridad”
      </div>
      <Image
        src="/images/JG-web-01.jpg"
        alt="Juan Gaig Relaciones Inmobiliarias"
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-left"
      />
    </div>
  );
};

export default hero;
