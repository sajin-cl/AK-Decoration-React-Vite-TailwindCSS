import { PERSONAL_NUMBER } from "@/config/data";

function Intro() {
  return (
    <section
      id="intro"
      className="py-14 px-10  w-full bg-black/75 min-h-screen"
    >
      <h1 className="text-gray-300 text-2xl font-bold font-mono">WEDDING & FLORAL DECORATIONS IN KANYAKUMARI</h1>
      <p className="text-gray-400 text-xs font-mono mb-3">Transforming your special moments into unforgettable experiences</p>
      <span className="inline-block text-white text-xs mb-5">Ratings: 4.9</span>
      <p className="text-gray-200 text-wrap  text-xs leading-6 tracking-wide mb-10">
        <span className="text-amber-300">Ak Decoration</span> – the trusted choice for <span className="text-amber-300">premium wedding, floral, and stage decoration services in Marthandam, Kanyakumari district. </span>
        Whether you’re planning a grand wedding, a stylish reception, or a simple yet elegant event, we bring your vision to life with creativity and precision. At Ak Decoration, we specialize in transforming spaces with stunning wedding décor, fresh floral arrangements, and beautifully designed stages that leave a lasting impression.
       
      </p>

      
        <button
          onClick={() =>
            window.open(
              `https://wa.me/${PERSONAL_NUMBER}?text=Hi%20I%20need%20decoration%20service`,
              "_blank"
            )
          }
          className="text-white font-mono text-sm px-20 py-2 border-2 border-amber-300  cursor-pointer hover:text-amber-300 hover:border-amber-400  transition duration-500"
        >
          BOOK NOW
        </button>
      
    </section>
  );
};

export default Intro;