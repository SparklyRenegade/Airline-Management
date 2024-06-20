import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from '../authContext';
import { useParams } from 'react-router-dom';
import route_plan from '../images/route-plan.png'
import '../CSS/MyFlightDetails.css';
import '../CSS/Loading.css';

function MyFlightDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated } = useContext(AuthContext);

    let {flightNo} = useParams();
    let flightData={};

    async function fetch_data() {
        try {
            const response = await fetch('url to find data of flight no', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(flightNo)
            });

            const data = await response.json();
            // console.log(data);
            if (response.ok) {
                flightData=data.data;
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
        // if({isAuthenticated})fetch_data();
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, []);

    flightData = {
        from: 'New York',
        to: 'Los Angeles',
        category: 'Economy',
        date: '2024-06-15',
        departureTime: '08:00',
        duration: '2h 30m',
        arrivalTime: '10:30',
        price: 200,
        aircraft: 'Boeing 737',
        airline: 'Example Airlines',
        stops: 1,
        passengers: [
            { id: 1, name: 'John ', age: 30, gender: 'Male' },
            { id: 2, name: 'Jane ', age: 25, gender: 'Male' },
            { id: 3, name: 'John ', age: 30, gender: 'Male' },
            { id: 4, name: 'Jane ', age: 25, gender: 'Male' },
            { id: 5, name: 'John ', age: 30, gender: 'Male' },
            { id: 6, name: 'Jane ', age: 25, gender: 'Male' }
        ],
        payment_history: 
            {
                payment_id: 123456,
                id: 1,
                date_time: '2024-06-12T10:30:00',
                offer: '0'
            }
    };
    

    const { from, to, category, date, departureTime, duration, arrivalTime, price, aircraft, airline, stops, passengers, payment_history} = flightData;
    const {payment_id, id, date_time, offer} = payment_history;

    return (
        <div>
            <div className={isLoading ? 'loading' : 'loaded'}>
                <Loading isLoading={isLoading} />
                <div className="content_">
                    <Navbar />
                    <Nav2>Flight Details</Nav2>
                    <div className='bg-slate-100 pt-4 pb-4'>
                    {
                        !isAuthenticated ? (
                            <div className='text-2xl text-center'>Login First to visit Flights</div>
                        ) : (        
                            <div className='my-flight-details'>
                                <div className="flight-booking-detail">
                                    <div className="flight-booking-title">
                                        <div className="booking-title-text">Your Flight Details</div>
                                    </div>
                                    <div className="booking-detail-box">
                                        <div className="booking-flight-detail">
                                            <div className="booking-flight-departure">
                                                <h5 className="booking-departure-time">{departureTime}</h5>
                                                <h5 className="booking-departure-location">{from}</h5>
                                            </div>
                                            <div className="booking-flight-route">
                                                <span className="route-text">From</span>
                                                <div className="route-info">
                                                    <h5 className="route-duration">0h 50m</h5>
                                                    <img src={route_plan} alt="Route Plan" className="route-plan-img"/>
                                                    <h6 className="route-stops">1 Stop</h6>
                                                </div>
                                                <span className="route-text">To</span>
                                            </div>
                                            <div className="booking-flight-departure">
                                                <div className="booking-arrival-time">{arrivalTime}</div>
                                                <div className="booking-arrival-location">{to}</div>
                                            </div>
                                        </div>
                                        <div className="booking-dates">
                                            <div className="booking-date-info">
                                                <h6 className="date-label">Departure</h6>
                                                <h5 className="date-text">{date}</h5>
                                            </div>
                                            <div className="vr-line"></div>
                                            <div className="booking-date-info">
                                                <h6 className="date-label">Arrival</h6>
                                                <h5 className="date-text">{date}</h5>
                                            </div>
                                        </div>
                                        <hr className="separator-line"/>
                                        <div className='pass-details'>
                                            <div className='pass-details-title'>Passengers Details</div>
                                            <div>
                                                <div className='flex justify-between text-xl pl-6 pr-6'>
                                                    <div>Name</div>
                                                    <div>Age</div>
                                                    <div>Gender</div>
                                                </div>
                                                { 
                                                    passengers.map((passenger,index)=>(
                                                        <div className='flex justify-between text-base pl-6 pr-6 mt-4'>
                                                            <div>{passenger.name}</div>
                                                            <div>{passenger.age}</div>
                                                            <div>{passenger.gender}</div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <hr className='separator-line'></hr>
                                        <div className="booking-flight-text">
                                            <h6 className="operator-info">Tpm Line</h6>
                                            <h6 className="operator-info">Operated by {airline} Airlines</h6>
                                            <h6 className="operator-info">{category} | Flight {flightNo} | Aircraft {aircraft}</h6>
                                            <h6 className="operator-info">Adult(s): 25KG luggage free</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='all-summary'>
                                    <div className='payment1'>
                                        <div className="flight-booking-title">
                                            <div className="booking-title-text">Payment History</div>
                                        </div>
                                        <div className="payment-history">
                                            <div className='user1'>
                                                <div className='user2'>Payment id</div>
                                                <div className='user3'>{payment_id}</div>
                                            </div>
                                            <hr/>
                                            <div className='user1'>
                                                <div className='user2'>Offer</div>
                                                <div className='user3'>{offer} %</div>
                                            </div>
                                            <hr/>
                                            <div className='user1'>
                                                <div className='user2'>Id</div>
                                                <div className='user3'>{id}</div>
                                            </div>
                                            <hr/>
                                            <div className='user1'>
                                                <div className='user2'>Date & Time </div>
                                                <div className='user3'>{date_time}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment1'>
                                        <div className="flight-booking-title">
                                            <div className="booking-title-text">Price Summary</div>
                                        </div>
                                        <div className='payment-history'>
                                            <div className='user1'>
                                                <div className='user2'>Price</div>
                                                <div className='user3'>{price}</div>
                                            </div>
                                            <hr/>
                                            <div className='user1'>
                                                <div className='user2'>Offer</div>
                                                <div className='user3'>{0.0} %</div>
                                            </div>
                                            <hr/>
                                            <div className='user1'>
                                                <div className='user2'>Net Price</div>
                                                <div className='user3'>{price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default MyFlightDetails;
