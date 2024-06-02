/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

function Marquee({ imagesurls ,direction }) {
  return (
    <div className="flex w-full py-10  overflow-hidden">

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%"}}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40  pr-10"
      >
        {imagesurls.map((url, i) => (
          <img key={i} className="" src={url} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%"}}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40  pr-10"
      >
        {imagesurls.map((url, i) => (
          <img key={i} className="" src={url} />
        ))}
      </motion.div>


 
      
    </div>
  );
}

export default Marquee;
