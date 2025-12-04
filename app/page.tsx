import Hero from "@/components/hero";
import Ayudar from "@/components/ayudar";
import Diferencia from "@/components/diferencia";
import Confiaron from "@/components/confiaron";
import About from "@/components/about";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-16 pt-8">
      <Hero />

      <div className="bg-black text-white p-12 rounded-3xl text-center text-xl lg:text-3xl flex justify-center items-center">
        <span className="max-w-xl font-lora italic">
          “Saber cuánto vale tu propiedad es el primer paso para tomar
          decisiones con confianza y claridad”
        </span>
      </div>

      <hr className="border-black border-t w-full" />

      <About link={true} />

      <hr className="border-black border-t w-full" />

      <Ayudar />
      <Diferencia />
      <Confiaron />

      <hr className="border-black border-t w-full" />

      <Contacto />
      <Footer />
    </section>
  );
}
