import Footer from "@/components/footer";
import Image from "next/image";
import Form from "@/components/form-2";
import {
  Facebook,
  Instagram,
  WhatsApp,
  TikTok,
  Youtube,
  Linkedin,
} from "@/lib/icons";

const page = () => {
  const socials = [
    { name: "Facebook", icon: Facebook, link: "https://www.facebook.com" },
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com" },
    { name: "WhatsApp", icon: WhatsApp, link: "https://wa.me" },
    { name: "TikTok", icon: TikTok, link: "https://www.tiktok.com" },
    { name: "Youtube", icon: Youtube, link: "https://www.youtube.com" },
    { name: "Linkedin", icon: Linkedin, link: "https://www.linkedin.com" },
  ];

  return (
    <section className="max-w-5xl m-auto flex flex-col gap-y-12 mt-40">
      <h1 className="text-2xl lg:text-4xl font-semibold">Contacto</h1>
      <div className="w-full aspect-[4/5] lg:aspect-video rounded-3xl relative overflow-hidden">
        <Image
          src="/images/JG-web-05.webp"
          alt="Juan Gaig Relaciones Inmobiliarias"
          width={1280}
          height={1024}
          className="w-full h-full object-cover object-left"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-y-12">
          <div>
            <h3 className="mb-4">Info de contacto:</h3>
            +549 11 39467500 <br />
            <a href="mailto:juangaig@gmail.com" className="hover:underline">
              juangaig@gmail.com
            </a>
          </div>
          <div>
            <h3 className="mb-4">Newsletter:</h3>
            <div className="mb-8">
              Recibí en tu e-mail las últimas novedades
            </div>
            <Form />
          </div>
        </div>
        <div>
          <h3 className="mb-4">Encontranos en:</h3>
          <div className="mb-8">
            Av. Gaona 2602, Ciudad de Buenos Aires, C1416DSO, Argentina
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.775420648232!2d-58.46621267016317!3d-34.61566790261456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f602ed3b85%3A0x31612153949a8f32!2sAv.%20Gaona%202602%2C%20C1416DSO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1764871047610!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="mb-4">Redes sociales:</h3>
          <div className="flex items-center gap-x-2">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-black rounded-xl border border-black text-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4">Alianzas:</h3>
          <img
            src="/images/alianzas.png"
            alt="Alianzas"
            className="w-full max-w-sm"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
