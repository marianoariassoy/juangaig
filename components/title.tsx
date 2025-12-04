const title = ({ title }: { title: string }) => {
  return (
    <div className="bg-black text-white p-8 rounded-3xl text-center text-2xl lg:text-4xl font-semibold">
      {title}
    </div>
  );
};

export default title;
