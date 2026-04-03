function Gallery({ images, limit }) {
  return (
    <section className="py-12 px-4 bg-white/25">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        OUR WORK
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, limit).map((img, index) => (
          <div
            key={index}
            className="overflow-hidden  shadow-md group cursor-pointer"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;