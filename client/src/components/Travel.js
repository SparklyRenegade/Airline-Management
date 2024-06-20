function Travel(){
    return(
        <div className="travel-sec bg-[#c6e3e6]">
                <div className="cloud-vector-block">
                    <img src="/cloud-vector.png" alt="" className="cloud-vector absolute"></img>
                    <img src="/vector-line.png" alt="" className="line-vector hidden xl:inline absolute w-1/2 mt-[3rem] ml-[16rem] z-0"></img>
                </div>
                <div class="container-fluid py-[3rem] sm:pt-[7rem] sm:pb-[5rem]">    
                    <div className="row flex flex-col lg:flex-row justify-around px-[2rem] sm:px-[4rem] lg:px-[3rem] xl:px-[6rem]">
                        <div clasNames="" >
                            <div className="left-content font-bold md:max-w-[20rem]">
                                <img src="/logo.png" alt="" class=""></img>
                                <h2 className="font-bold text-3xl sm:text-5xl lg:text-7xl mb-4 flex flex-col mt-[3rem]">
                                    <span className='leading-[3rem] md:leading-[4rem] lg:leading-[5.3rem]'><p className='inline bg-slate-200'>TRAVEL ALL</p> <p className="inline-block mt-[1rem] bg-slate-200">OVER</p> <p className="inline  bg-slate-200">THE</p> <p className="inline-block mt-[1rem] text-blue-500 bg-slate-200">WORLD</p></span>
                                </h2>
                                <button className="inline text-white rounded text-xl mt-6 font-bold p-2 sm:w-[10rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ...">
                                        Booking Now
                                </button>  
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <img src="assets/media/vector/border-line.png" alt="" className="border-image"></img>
                                <div className="row flex items-center gap-[1rem] sm:gap-[2rem]">
                                    <div className="lg:h-[14rem] xl:h-[20rem] bg-white rounded-3xl border-[8px] z-10">
                                        <img src="/paris.png" alt="" className="side-image rounded-2xl h-full"></img>
                                    </div>
                                    <div className="lg:h-[28rem] xl:h-[35rem] bg-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-[8px]">
                                        <img src="/dubai.png" alt="" className="center-image rounded-[1.7rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] h-full"></img>
                                    </div>
                                    <div className="lg:h-[14rem] xl:h-[20rem] bg-white rounded-3xl border-[8px]">
                                        <img src="/italy.png" alt="" className="side-image rounded-2xl h-full"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Travel;