import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Gallery({ images, limit }) {
  return (
    <motion.section
      className="py-12 px-4 bg-white/25"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.slice(0, limit).map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden shadow-md group cursor-pointer p-3 bg-white/50 rounded-b-sm"
            variants={cardVariants}
            whileTap={{ scale: 0.95 }}  
          >
            <motion.img
              src={img}
              alt={`gallery-${index}`}
              loading="lazy"
              className="w-full h-56 object-cover rounded-sm"
              whileTap={{ scale: 1.1 }}  
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;