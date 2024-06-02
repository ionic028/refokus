

function Footer() {
  return (
    <div className="w-full">
         <div className="max-w-screen-xl mx-10 py-10 sm:flex-nowrap flex gap-32 flex-wrap items-center justify-center">
       <div className="basis-1/2">
        <h1 className="text-[5.5rem] sm:text-[11.5rem] font-semibold leading-none tracking-tighter">refokus.</h1>
       </div>
       <div className="basis-1/2 flex sm:gap-4 gap-20">
         <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "Linkedin"].map((item, index)=> (<a className="block mt-2 text-zinc-600 capitalize" key={index}>{item}</a>))}
         </div>
         <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "Linkedin"].map((item, index)=> (<a className="block mt-2 text-zinc-600 capitalize" key={index}>{item}</a>))}
         </div>
         <div className="basis-1/2 hidden sm:block">
            <p className="word">Rekous is a pioneering digitial agency driven by design and empowered by technology</p>
           
         </div>
       </div>
         </div>
    </div>
  )
}

export default Footer
