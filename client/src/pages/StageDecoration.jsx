import { STAGE_DECOR } from "@/config/data";

const StageDecoration = () => {
  return (
    <div className="px-6 py-10 mx-auto bg-black/25 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        STAGE DECORATIONS IN KANYAKUMARI
      </h1>

      <p className="text-amber-100 mb-6 text-xs">
        We design attractive stage decorations for weddings, birthday parties,
        and corporate events with creative themes and lighting.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {STAGE_DECOR.map((dec) => (
          <div
            key={dec?.id}
            className="bg-white/50 shadow-lg rounded p-4"
          >
            <img
              src={dec?.img}
              alt={dec?.title}
              className="mb-3 h-52 w-full"
            />
            <h2 className="font-semibold text-sm text-center">
              {dec?.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageDecoration;