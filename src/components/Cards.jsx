import { motion } from "framer-motion"
import Card from "./Card"


function Cards() {
  
  return (
    <motion.div  initial={{ rotate: 0, y: "40%", opacity: 0 }}
    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
    transition={{
      ease: [0.33, 1, 0.68, 1],
      duration: 0.8,
    }} className="w-full  ">
    <div className="max-w-screen-xl mx-auto sm:py-20  flex gap-3 ">
      <Card width={"basis-1/3"} start={false} para={true}/>
      <Card width={"basis-2/3"} start={true} para={false} hover="true"/>
    </div>
    </motion.div>  
  )
}

export default Cards
