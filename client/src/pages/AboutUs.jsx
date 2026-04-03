import { EXPERIENCE, ADMIN_NAME, COMPANY_NAME } from "@/config/data";

function AboutUs() {
  return (
    <section className="py-14 px-6 md:px-16 bg-black/75 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        ABOUT US
      </h2>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          <span className="text-amber-300 font-semibold">Ak Decoration</span> is a trusted name for
          wedding and event decoration services in Kanyakumari. We specialize in
          creating elegant, visually stunning setups that turn your special
          occasions into unforgettable experiences.
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          From grand weddings to intimate celebrations, our team focuses on
          delivering customized decoration solutions that match your theme,
          style, and budget. We combine creativity, quality materials, and
          attention to detail to ensure every event looks perfect.
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">
          Whether it’s floral arrangements, stage decoration, or complete event
          styling, we bring your ideas to life with professionalism and passion.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-2xl font-bold text-amber-300">100+</h3>
          <p className="text-gray-400 text-xs">Events Completed</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-amber-300">4.9★</h3>
          <p className="text-gray-400 text-xs">Customer Rating</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-amber-300">{EXPERIENCE}+</h3>
          <p className="text-gray-400 text-xs">Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-amber-300">100%</h3>
          <p className="text-gray-400 text-xs">Client Satisfaction</p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 py-10">

        {/* Image */}
        <div className="w-40 h-40 md:w-full md:h-80 overflow-hidden rounded-full border-4 border-amber-300">
          <img
            src="/founder.jpeg"
            alt="Founder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-amber-300 mb-2">
            {ADMIN_NAME}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Founder & Creative Director
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            with a passion for creativity and attention to detail, our founder has
            built <span className="text-amber-300"> {COMPANY_NAME} </span> into a trusted name in event styling. With years of
            experience in wedding and floral decorations, they focus on delivering
            unique, elegant, and memorable setups tailored to each client’s vision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;