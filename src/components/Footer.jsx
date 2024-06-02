import { motion } from "framer-motion";

function Footer() {
  
  return (
    <motion.div  initial={{ rotate: 0, y: "40%", opacity: 0 }}
    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
    transition={{
      ease: [0.33, 1, 0.68, 1],
      duration: 0.8,
    }} className="w-full bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto py-10 px-5 sm:px-10 flex flex-wrap gap-10 items-center justify-center">
        <div className="w-full sm:w-auto sm:flex-1 sm:text-left text-center">
          <motion.h1  className="text-5xl sm:text-[5.5rem] lg:text-[11.5rem] font-semibold leading-none tracking-tighter">
            refokus.
          </motion.h1>
        </div>
        <div className=" sm:w-auto sm:flex-1 flex gap-20 sm:gap-4 items-center   sm:justify-between">

          <div className="w-full sm:w-1/3">
            <h4 className="mb-4 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "Linkedin"].map((item, index) => (
              <a className="block mt-2 text-zinc-400 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>  
          <div className="w-full sm:w-1/3">
            <h4 className="mb-4 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "Linkedin"].map((item, index) => (
              <a className="block mt-2 text-zinc-400 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>

        </div>
        <div className="w-full text-center   ">
            <p className="text-zinc-400">
              Rekous is a pioneering digital agency driven by design and empowered by technology.
            </p>
          </div>
      </div>
    </motion.div>
  );
}

export default Footer;
