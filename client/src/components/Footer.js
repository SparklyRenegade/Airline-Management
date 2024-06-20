import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Footer(){
    return(  
        <footer className="bg-white">
            <div className="container-fluid">
                <div className="row flex flex-col xs:flex-row sm:flex-row flex-wrap px-[1rem] sm:px-[5rem] xs:py-[3.5rem] xs:space-x-[2rem]">
                    <div className="flex-1 xs:pr-[2rem] space-y-5 py-[2rem] xs:pl-[2rem]">
                        <a href="/"><img src="/logo.png" alt="#" className=""></img></a>
                        <p className="">Lorem ipsum dolor sit amet consectetur. Aliquet vulputate augue
                            penatibus in
                            libero et id aliquam. In ridiculus pretium est velit euismod. </p>
                        <h6 className="font-semibold">Subscribe to our special offers</h6>
                        <form action="index.html" method="post">
                            <input type="email" className="w-full h-[2.3rem] p-[0.5rem] border-[2px] rounded" placeholder="Email address" name="email"></input>
                            <button className="inline text-white rounded text-xl mt-6 font-bold p-2 sm:w-[10rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ...">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 space-y-6 py-[2rem]">
                        <h4 className="text-[2rem] font-medium">Booking</h4>
                        <div className="our-links">
                            <ul className="unstyled space-y-5">
                                <li className=""><a href="/" className="light-black">Book Flights</a>
                                </li>
                                <li className=""><a href="/" className="light-black">Travel Services</a>
                                </li>
                                <li className=""><a href="/" className="light-black">Transportation</a></li>
                                <li className=""><a href="/" className="light-black">Planning Your
                                        Trip</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 py-[2rem]">
                        <h4 className="text-[2rem] font-medium">Useful Links</h4>
                        <div className="our-links">
                            <ul className="unstyled space-y-5">
                                <li className=""><a href="/" className="">Home</a>
                                </li>
                                <li className=""><a href="/" className="">Blogs</a>
                                </li>
                                <li className=""><a href="/" className="">About </a></li>
                                <li className=""><a href="/" className="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 py-[2rem]">
                        <h4 className="text-[2rem] font-medium">Manage</h4>
                        <div className="our-links">
                            <ul className="unstyled space-y-5">
                                <li className=""><a href="/" className="">Check-in</a></li>
                                <li className=""><a href="/" className="">Manage Your
                                        Booking</a></li>
                                <li className=""><a href="/" className="">Chaurfeur Drive</a>
                                </li>
                                <li className=""><a href="/" className="">Flight Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 sm:py-[2rem]">
                        <h4 className="text-[2rem] font-medium">Contact Us</h4>
                        <div className="follow-us">
                            <ul className="unstyled space-y-5">
                                <li className=""><FontAwesomeIcon icon={faLocationDot}/>&nbsp;&nbsp;123
                                    Main Street, Anytown, USA.</li>
                                <li className="text-blue-500 lg:text-[1.5rem]"><FontAwesomeIcon icon={faPhone}/>&nbsp;&nbsp;+1 234 567 890</li>
                                <li className=""><a href="/"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;email@example.com</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h6 className="text-[2rem] font-medium">Follow Us!</h6>
                            {/* <ul className="unstyled">
                                <li><a href="" class="active"><img src="#" alt=""></img></a></li>
                                <li><a href=""><img src="#" alt=""></img></a></li>
                                <li><a href=""><img src="#" alt=""></img></a></li>
                                <li><a href=""><img src="#" alt=""></img></a></li>
                            </ul> */}
                        </div>
                        <p className="">©2023 FlyNow All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    
    );
}

export default Footer;