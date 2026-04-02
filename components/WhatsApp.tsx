import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-4 z-30">
      <a
        href="https://wa.me/5491139467500"
        target="_blank"
        rel="noreferrer"
        className="w-16 h-16 bg-black text-white rounded-full p-2 flex items-center justify-center text-3xl shadow-md border border-black hover:bg-transparent hover:text-black"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
