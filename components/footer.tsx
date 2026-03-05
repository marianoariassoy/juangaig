"use client";

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col">
      <hr className="border-black border-t w-full" />
      <div className="text-center font-medium mt-6 mb-12">
        Juan Gaig {year} &copy;
      </div>
    </footer>
  );
};

export default footer;
