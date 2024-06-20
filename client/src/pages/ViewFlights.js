import { useState } from 'react';
import Navbar from '../components/Navbar';
import FlightCard from '../components/FlightCard';
import Loading from '../components/Loading';
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm';

function ViewFlights({setViewFlightData, viewFlightData, setBookFlightData }) {
    const [isLoading,setIsLoading] = useState(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
    return (<div>
        <div className={isLoading ? 'loading' : 'loaded'}>
            <Loading isLoading={isLoading} />
            <div className="content_">
                <Navbar />
                <Nav2>Flight Listing</Nav2>
                <SearchForm setViewFlightData={setViewFlightData}/>
                <div className='bg-slate-100'>
                    <div className='h-[50px]'></div>
                    <div>
                    {
                        viewFlightData.map((flightData) => {
                            return <FlightCard key={flightData.id} flightData={flightData} setBookFlightData={setBookFlightData} />
                        })
                    }
                    </div>
                    <div className='h-[50px]'></div>
                </div>
                
                <Footer/>
            </div>
        </div>
    </div>
    )
}
export default ViewFlights;