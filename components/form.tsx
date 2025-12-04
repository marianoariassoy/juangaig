const form = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Tu nombre completo"
        className="border rounded-full w-full h-12 px-4 py-2 focus:outline-none text-center placeholder:text-black placeholder:font-medium"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Tu email"
        className="border rounded-full w-full h-12 px-4 py-2 focus:outline-none text-center placeholder:text-black placeholder:font-medium"
      />
      <div className="flex justify-center">
        <button className="bg-black rounded-full px-4 font-bold py-2 cursor-pointer text-white border border-black hover:bg-white hover:text-black leading-4 h-12 uppercase">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default form;
