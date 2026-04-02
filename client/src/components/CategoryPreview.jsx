


function CategoryPreview({services}) {
  return (
    <div className="bg-white px-6 md:px-10 py-10">
      <p className="text-amber-500 text-center mb-2 font-semibold">
        Your Preferred Choice for All Decoration Needs
      </p>

      <h1 className="text-2xl md:text-3xl text-black text-center mb-5 border-b border-amber-200 pb-5 font-semibold">
        Our Decoration Services
      </h1>

      <p className="text-sm text-gray-500 text-center leading-relaxed mb-10 max-w-3xl mx-auto">
        At <span className="text-amber-500 font-medium">AK Decoration Service</span>, we provide complete decoration solutions in Marthandam that bring style, creativity, and precision to every occasion.
      </p>

      {/*Image Grid Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer aspect-[3/4]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full  object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 group-hover:bg-gradient-to-b from-amber-100/50 to-transparent"></div>

           {/*  details */}
            <div className="absolute bottom-6 left-6 text-white transform translate-y-6 group-hover:translate-y-0 transition duration-300">
              <h2 className="text-xl md:text-2xl font-bold">
                {item.title}
              </h2>
              <div className="w-14 h-1 bg-amber-500 mt-2 mb-2"></div>
              <p className="text-sm max-w-xs opacity-0 group-hover:opacity-100 transition duration-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;