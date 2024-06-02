/* eslint-disable react/prop-types */


function Stripe({val}) {
  return <div className="sm:w-[16.66%]  sm:px-5  sm:py-5 px-5 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between ">
     <img className="" src={val.url} alt="" /> 
        <span className="font-semibold sm:flex hidden">{val.number}</span>                       
  </div>;
}

export default Stripe;
