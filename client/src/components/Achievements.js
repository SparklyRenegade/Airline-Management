// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Achievements(){
    return(
        <div className="w-screen bg-slate-200 sm:py-[6rem]">
            <div className="container sm:w-11/12 mx-auto rounded-3xl bg-white p-[1.5rem] sm:p-[3rem]">
                <div className="content flex flex-col lg:flex-row gap-[3rem]">
                    <div className="left-content">
                        <h2 className="inline-block mb-[0.5rem] text-blue-500 text-[1.5rem]">Achievement</h2>
                        <h2 className="font-bold text-[2rem] xl:text-[3rem] leading-[2.5rem] xl:leading-[3.5rem]">Your Destination Awaits, Book Now</h2>
                        {/* <p className="inline-block mt-[1rem] text-slate-400">
                        Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu.
                        In tellus interdum vel ac massa interdum viverra elementum auctor.
                        </p> */}
                        <div className='flex flex-col gap-y-[3rem] my-[2rem] lg:flex-row lg:gap-[2rem] xl:gap-[3rem] w-full justify-between'>
                            <div className='flex bg-slate-100 shadow-lg shadow-violet-300 py-[1rem] w-fit px-[2rem] rounded-lg'>
                                <div className=''>
                                    <p className="text-blue-500 block text-[2rem] font-bold"> 10K+ </p>
                                    <p className='inline-block text-[1rem] sm:text-[1.5rem]'> Happy Customers </p> 
                                </div>
                                <img className='w-[2rem] mx-[1rem]' src="/user-regular.svg" alt='#'></img>
                            </div>
                            <div className='flex bg-slate-100 shadow-lg shadow-violet-300 py-[1rem] w-fit px-[2rem] rounded-lg'>
                                <div>
                                    <p className="text-blue-500 block text-[2rem] font-bold"> 100% </p>
                                    <p className='inline-block text-[1rem] sm:text-[1.5rem]'>Client Satisfied </p> 
                                </div>
                                <img className='w-[2rem] mx-[1rem]' src="/user-solid.svg" alt="#"></img>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between gap-[0.5rem]'>
                            <p className='text-xl'>
                                Let's Connect Reach Out for More Information
                            </p>
                            <button className="inline text-white rounded text-[1rem] sm:text-xl mt-6 font-bold p-2 w-fit sm:w-[10rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ...">
                                 Contact Us
                            </button>  
                        </div>
                    </div>
                    <div className="image my-auto rounded-2xl">
                        <img className='w-full rounded-2xl' src="/achievement-image.png" alt="#"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;