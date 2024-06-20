import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

function Avilable(){
    return(
        <div>
            <div className="flex flex-col py-[4rem] md:flex-row gap-y-3 w-screen justify-evenly bg-slate-200 ">
                <div className='flex justify-center p-1 bg-white shadow-violet-200 rounded-lg border shadow-md w-fit mx-auto sm:w-2/3 md:w-[14rem] lg:w-[16rem] xl:w-[20rem]'>
                    <FontAwesomeIcon className='my-auto  mx-[1rem]' icon={faPhone} />
                    <div className='w-3/4 ml-[1rem]'>
                        <h2 className='text-2xl font-bold'>We Are Now Avilable</h2>
                        <p>Call +1 555 666 888 contact with us</p>
                    </div>
                </div>

                <div className='flex justify-center p-1 bg-white shadow-violet-200 rounded-md border shadow-lg w-fit mx-auto sm:w-2/3 md:w-[14rem] lg:w-[16rem] xl:w-[20rem]'>
                    <FontAwesomeIcon className='my-auto  mx-[1rem]' icon={faPlaneDeparture} />
                    <div className='w-3/4 ml-[1rem]'>
                        <h2 className='text-2xl font-bold'>International Flights</h2>
                        <p>Call +1 555 666 888 contact with us</p>
                    </div>
                </div>

                <div className='flex justify-center p-1 bg-white rounded-md border shadow-violet-200 shadow-lg w-fit mx-auto sm:w-2/3 md:w-[14rem] lg:w-[16rem] xl:w-[20rem]'>
                    <FontAwesomeIcon className='my-auto  mx-[1rem]' icon={faMoneyBill} />
                    <div className='w-3/4 ml-[1rem]'>
                        <h2 className='text-2xl font-bold'>Check Refund</h2>
                        <p>Call +1 555 666 888 contact with us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avilable;