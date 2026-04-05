import { WEDDING_DECOR } from "@/config/data";

const WeddingDecoration = () => {
  return (
    <div className="px-6 py-10  mx-auto bg-black/25 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Wedding Decoration in Kanyakumari
      </h1>

      <p className="text-amber-200 mb-6 text-xs">
        We provide elegant and customized wedding decoration services in Kanyakumari.
        From traditional to modern themes, we create stunning wedding setups.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {WEDDING_DECOR.map((dec) => (
          <div
            key={dec?.id}
            className="bg-white/50 shadow-lg rounded p-4">
            <img src={dec?.img} alt={dec?.title} className="mb-3 h-52 w-full" />
            <h2 className="font-semibold text-sm text-center">{dec?.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingDecoration;