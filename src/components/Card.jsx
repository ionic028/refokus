/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";

function Card({ width, start, para, hover = "false" }) {
  
  return (
    <motion.div
     whileHover={{backgroundColor: hover == "true" && "#7443ff" , padding : "25px"}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full  flex justify-between items-center">
          <h3>Up Next: News</h3>
          <IoArrowForwardSharp />
        </div>
        <h1 className="text-3xl font-medium mt-10 ">Insiights and Behind the scenes</h1>
      </div>
      <div className="w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-zinc-50 border-[1px]">
              Contact Us
            </button>
          </>
        )}

        {para === true && (
          <p className="text-lg mt-10">
           Explore what drives our team
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
