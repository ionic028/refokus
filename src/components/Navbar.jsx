import { motion } from "framer-motion";
import Button from "./Button";

/* eslint-disable react/jsx-key */
function Navbar() {
  
  return (
    <motion.div initial={{ rotate: 0, y: "-40%", opacity: 0 }}
    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
    transition={{
      ease: [0.33, 1, 0.68, 1],
      duration: 0.8,
    }} className="max-w-screen-xl py-6 px-5 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links hidden sm:flex  gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, i) =>
            elem.length == 0 ? (
              <span  key={i}  className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a  key={i}
               
                className=" font-regular text-sm flex items-center gap-1"
              >
                {i === 1 && (
                  <span
                    style={{ boxShadow: "000.25em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-400"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </motion.div>
  );
}

export default Navbar;
