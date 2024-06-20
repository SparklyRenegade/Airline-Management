import {motion,useMotionValue,useSpring,useTransform} from "framer-motion";
import '../CSS/Hero.css';

function Hero(){
    const x = useMotionValue(0);
   const y=useMotionValue(0);

  const mouseXSpring=useSpring(x);
  const mouseYSpring=useSpring(y);

  const rotateX=useTransform(mouseXSpring,[-0.5,0.5],["17.5deg","-17.5deg"]);
  const rotateY=useTransform(mouseYSpring,[-0.5,0.5],["17.5deg","-17.5deg"]);

  const handleMouseMove= (e) =>{
    const rect=e.target.getBoundingClientRect();
    const w=rect.width;
    const h=rect.height;
    const mouseX=e.clientX-rect.left;
    const mouseY=e.clientY-rect.top;
    const xPat=mouseX/w-0.5;
    const yPat=mouseY/h-0.5;

    x.set(xPat);
    y.set(yPat);
  }

  const handleMouseLeave= ()=>{
    x.set(0);
    y.set(0);
  }


  return(
    <div className='hero-section bg-gradient-to-r from-white to-slate-200'>
    <section className="rounded  flex flex-col md:flex-row justify-between bg-cover bg-center lg:mx-[6rem] md:mx-[5rem] py-[3rem]">

    <svg className="hidden xl:inline absolute w-2/3 ml-[8rem] mt-[18rem] -rotate-[20deg] z-0" xmlns="http://www.w3.org/2000/svg" width="1414" height="319" viewBox="0 0 1414 319" fill="none">
        <path class="path" d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5" stroke="#ECECF2" stroke-width="6" stroke-linecap="round" stroke-dasharray="round"></path>                  
        <path class="dashed" d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5" stroke="#212627" stroke-width="6" stroke-linecap="round" stroke-dasharray="22 22"></path>
    </svg>

      <div className='w-screen md:max-w-[20rem] lg:pt-[5rem] z-10'>
        <div>
          <h2 className="font-bold text-3xl sm:text-5xl lg:text-7xl mb-4 flex flex-col">
            <span className='mb-0 pb-0 sm:leading-[4rem] lg:leading-[5.3rem]'><p className='inline text-blue-500'>Book</p> Your Dream <p className='inline text-blue-500'>Flights </p>Now!</span>
          </h2>
        </div>
        <p className='mt-0 pt-0'>
          Lorem ipsum dolor sit amet consectetur. Felis tristique pretium leo nisi at risus ac enim.
        </p>
        
        <button className="inline text-white rounded text-xl mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ...">
            Book Now
        </button>
        
      </div>
      <div className='flex flex-row mx-auto md:flex-grow'>
        <div className='flex md:my-auto lg:my-0'>
          <motion.div style={{
            rotateX,rotateY,
            tranasformStyle:"preserve-3d",
          }}>
            <img 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className=' w-[22rem] sm:w-[30rem]  md:w-full hover:z-[300px] hover:scale-105 duration-1000' src='/plane.png' alt=''></img>
          </motion.div> 
        </div>
          
      </div>
    </section>
</div>
  )
}

export default Hero;