import About from "@/components/about";
import ShortCuts from "@/components/shortcuts-sobremi";
import Footer from "@/components/footer";

const page = () => {
  return (
    <section className="max-w-5xl m-auto mt-40 flex flex-col gap-y-12">
      <h1 className="text-2xl lg:text-4xl font-semibold">Sobre mi</h1>
      <About link={false} />
      <p className="text-lg lg:text-xl lg:p-4 text-wrap">
        Soy corredor inmobiliario (CUCICBA Mat. N° 8752) y abogado (T° 92 F° 452
        C.P.A.C.F.), con más de 15 años de experiencia en el mercado. Acompaño a
        las personas en el proceso de venta de sus propiedades con conocimiento,
        escucha y atención personalizada.
        <br />
        <br />
        Me formé en derecho y comencé mi carrera en Tribunales, donde me
        interesé en la mejora de los procesos internos. Eso me llevó a
        capacitarme en administración de empresas y marketing (Postgrado UBA),
        lo que me permitió ampliar mis horizontes e intereses.
        <br />
        <br />
        En el año 2010 desembarqué en el mundo inmobiliario a través del área
        legal, redactando y elaborando contratos, boletos de compra venta,
        fideicomisos, etc. El fluir de las actividades y mi curiosidad me
        llevaron a involucrarme en todas las etapas del negocio inmobiliario:
        desde la estrategia comercial, la captación de propiedades, las
        tasaciones hasta el cierre de operaciones.
        <br />
        <br />
        Fue allí donde descubrí que este ámbito me permitía poner en juego todo
        lo que sabía y me gustaba (lo legal, el marketing, la negociación, etc.)
        al servicio de los demás.
        <br />
        <br />A lo largo de mi carrera trabajé en inmobiliarias de distintos
        estilos y escalas: en grandes grupos con estructuras comerciales
        complejas y en inmobiliarias de barrio más tradicionales y cercanas. De
        cada una de esas experiencias me llevé aprendizajes valiosos que hoy
        nutren mi mirada integral:
        <span className="italic"> “Pensar global, actuar local”</span>
        <br />
        <br />
        Mi espíritu emprendedor me impulsó a finalizar la carrera de Corredor
        Inmobiliario y Martillero Público, a certificarme en prácticas avanzadas
        de Real Estate (CRS Argentina) y a fundar mi propia inmobiliaria. Hoy,
        desde Juan Gaig Relaciones Inmobiliarias, ofrezco un acompañamiento
        profesional, franco y cercano a quienes confían en mí para vender su
        propiedad.
        <br />
        <br />
        Me involucro personalmente en la comercialización de cada propiedad,
        porque detrás de cada operación hay decisiones y emociones importantes
        en juego.
        <br />
        <br />
        Conocer el mercado, mantenerse actualizado, entender de precios,
        tendencias y regulaciones son herramientas técnicas que muchos
        corredores manejamos muy bien. Pero la escucha activa, la empatía, la
        disponibilidad real y la capacidad de generar confianza son valores que
        no se encuentran con facilidad.
        <br />
        <br />
        Yo estoy convencido de que en el mundo inmobiliario no se trata solo de
        ser efectivo, sino también (y sobre todo) se trata de ser humano.
        <br />
        <br />
        Si querés que te acompañe en el proceso de venta de tu propiedad,
        escribime y conversemos.
        <br />
        <br />
        Un abrazo, <br /> Juan
      </p>
      <hr className="border-black border-t w-full" />

      <ShortCuts />
      <Footer />
    </section>
  );
};

export default page;
