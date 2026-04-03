import { PERSONAL_NUMBER } from "@/config/data";

function Intro() {
  return (
    <section
      id="intro"
      className="py-14 px-10  w-full bg-black/50"
    >
      <h1 className="text-gray-300 text-2xl font-bold font-mono">WEDDING & FLORAL DECORATIONS IN KANYAKUMARI</h1>
      <p className="text-gray-400 text-xs font-mono mb-3">Transforming your special moments into unforgettable experiences</p>
      <span className="inline-block text-white text-xs mb-5">Ratings: 4.9</span>
      <p className="text-white text-wrap  text-xs leading-loose mb-5">
        <span className="text-amber-300">Ak Decoration</span> – the trusted choice for <span className="text-amber-300">premium wedding, floral, and stage decoration services in Marthandam, Kanyakumari district. </span>
        Whether you’re planning a grand wedding, a stylish reception, or a simple yet elegant event, we bring your vision to life with creativity and precision. At Ak Decoration, we specialize in transforming spaces with stunning wedding décor, fresh floral arrangements, and beautifully designed stages that leave a lasting impression. <br />
        Our team combines artistic design with practical execution to deliver decorations that perfectly match your style, theme, and budget. From traditional setups to modern concepts, every project is handled with attention to detail, quality materials, and on-time delivery. <br />
        We believe every celebration deserves a unique touch. That’s why we focus on creating personalized decoration experiences that reflect your taste and make your special moments unforgettable. <br />
        From intimate functions to large-scale events, Ak Decoration turns your ideas into reality with elegance and perfection. <br />
        Start planning your event today with Ak Decoration – your trusted decoration partner in Marthandam.
      </p>

      <div className="btn-section flex gap-10">
        <a href={`tel:+${PERSONAL_NUMBER}`}>
          <button className="hover:text-white font-mono border border-white text-sm bg-amber-300 py-1 px-6 rounded-full cursor-pointer hover:bg-transparent transition duration-1000">
            BOOK NOW
          </button>
        </a>
        <button
          onClick={() =>
            window.open(
              `https://wa.me/${PERSONAL_NUMBER}?text=Hi%20I%20need%20decoration%20service`,
              "_blank"
            )
          }
          className="text-white font-mono text-sm border border-amber-300 py-1 px-6 rounded-full cursor-pointer hover:text-amber-300 transition duration-500"
        >
          WHATSAPP US
        </button>
      </div>
    </section>
  );
};

export default Intro;