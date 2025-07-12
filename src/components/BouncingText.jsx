import { motion } from "framer-motion";

const BouncingText = () => {
  return (
    <motion.p
      className="hover-text inline-block text-2xl font-semibold cursor-pointer"
      whileHover={{
        scale: 1.4,
        color: "#facc15",
        rotate: [0, -2, 2, -2, 0],
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}>
      Hover me to bounce and glow!
    </motion.p>
  );
};

export default BouncingText;
