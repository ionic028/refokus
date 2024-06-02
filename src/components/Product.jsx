/* eslint-disable react/prop-types */
import Button from "./Button";

// eslint-disable-next-line react/prop-types
function Product({val,mover,count}) {
  return (
    <div className="w-full h-[23rem] py-20  text-white sm:p-20 p-10">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="sm:text-6xl text-4xl capitalize hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75  duration-300   font-semibold">{val.title}</h1>
        <div className="dets  sm:w-1/3 w-1/2 ">
          <p className="mb-10 sm:text-lg text-sm tracking-tighter ">{val.description}</p>
           <div className="flex flex-wrap gap-5 ">
           {val.live && <Button/>}
          {val.case && <Button title="Case Study"/>}
           </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
