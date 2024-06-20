import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import MyFlightCard from '../components/MyFlightCard';
import Loading from '../components/Loading';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from '../authContext';

function MyFlights() {
    const [myflights, setmyflights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated } = useContext(AuthContext)


    async function fetch_data() {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/getbookedflights', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setmyflights(data.flights);
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
            } else {
                console.log(data);
                toast.error(data.message || "Error Occurred");
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
            }
        } catch (error) {
            toast.error("Network error, please try again later");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if({isAuthenticated})fetch_data();
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, []);

    return (
        <div>
            <div className={isLoading ? 'loading' : 'loaded'}>
                <Loading isLoading={isLoading} />
                <div className="content_">
                    <Navbar />
                    <Nav2>My Flights</Nav2>
                    <div className='bg-slate-100 pt-4 pb-4'>
                    {
                        !isAuthenticated ? (
                            <div className='text-4xl text-center'>
                                Login First to visit Flights.
                                Click <a className='underline' href='/login'>here</a> to login now.
                                </div>
                        ) : (        
                            <div>
                                {myflights.map((flightData) => {
                                    return <MyFlightCard key={flightData.id} flightData={flightData} />
                                })}
                            </div>
                        )
                    }
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default MyFlights;
