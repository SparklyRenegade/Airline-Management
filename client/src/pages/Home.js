import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import '../CSS/Home.css';
import Loading from '../components/Loading';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import Avilable from '../components/Avilable';
import Travel from '../components/Travel';
import Achievements from '../components/Achievements';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function Home({ setViewFlightData }) {
    const [isLoading,setIsLoading] = useState(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

    return (
    <div className={isLoading ? 'loading' : 'loaded'}>
      <Loading isLoading={isLoading} />
      <div className="content_">
        
        <div>

        <Navbar/>
        <Hero/>
        <SearchForm setViewFlightData={setViewFlightData} />
        <Avilable/>
        <Travel/>
        <Achievements/>
        <Testimonial/>
        <Footer/>
            
        </div>
    </div>
    </div>
    
    );
}

export default Home;
