import '../CSS/BookingDetails.css';
import React from 'react';
import route_plan from '../images/route-plan.png'
import { useNavigate } from 'react-router-dom';

function MyFlightCard({ flightData }) {
    const navigate=useNavigate();
    const { flightNo, from, to, category, date, departureTime, duration, arrivalTime, price, aircraft, airline, stops } = flightData;
    return (
        <div className="flight-booking-detail">
            <div className="flight-booking-title flex justify-between">
                <div className="booking-title-text">{flightNo}</div>
                <div>
                    <button className='text-xl mr-6 underline text-sky-600' onClick={()=>{navigate(`/my_flights/${flightNo}`)}}>All Details</button>
                </div>
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
                <div className="booking-dates pb-6">
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
            </div>
        </div>

    );
}

export default MyFlightCard;
