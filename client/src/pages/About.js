import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import '../CSS/About.css';
import Loading from '../components/Loading';
import { useState } from 'react';
import Achievements from '../components/Achievements';
import Avilable from '../components/Avilable';
import Testimonial from '../components/Testimonial';
import airport from '../images/airport.jpg'

function About() {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
    return (
        <div className={isLoading ? 'loading' : 'loaded'}>
            <Loading isLoading={isLoading} />
            <div className="content_">
                <Navbar />
                <Nav2>About Us</Nav2>
                <div className='bg-slate-200 pt-6 pb-6'>
                <div className='airpot bg-white'>
                    <div className='airpot1'>
                        <div>Where Your Journey Begins with Quality and Reliability</div>
                    </div>
                    <div className='airpot2'>
                        <div>Lorem ipsum dolor sit amet consectetur. Nibh vivamus quis risus augue odio eget donec leo phasellus. Auctor est aliquam commodo enim auctor libero. Cras sed sagittis id in ridiculus amet vel euismod. Eu nunc lacus dui natoque. Consequat aenean tristique accumsan dictum augue.</div>
                    </div>
                    <div className='airpot3'>
                        <img classname='airpot4' src={airport}/>
                    </div>
                </div>
                </div>
                <Achievements/>
                <Avilable/>
                <Testimonial/>
                <Footer/>
            </div>
        </div>
    )
}
export default About;