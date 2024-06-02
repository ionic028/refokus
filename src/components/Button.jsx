import { motion } from "framer-motion";
import { useRef } from "react";
import { IoIosReturnRight } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function Button({ title = "Get Started" }) {
  
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef}

    drag
    dragConstraints={constraintsRef}
      whileHover={{ scale: 1.2 }}
      className="sm:w-40 sm:px-4 sm:py-2 px-2 py-1 flex  items-center justify-between gap-3 bg-zinc-100 text-black rounded-full cursor-grabbing"
    >
      <motion.span
        
        className="sm:text-sm text-xs sm:font-medium "
      >
        {title}
      </motion.span>
      <motion.span  whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}><IoIosReturnRight /></motion.span> 
    </motion.div>
  );
}

export default Button;
