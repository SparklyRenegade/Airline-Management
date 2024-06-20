import '../CSS/BookingDetails.css';
import React from 'react';
import route_plan from '../images/route-plan.png'

function BookingDetails({ flightData }) {
    const { flightNo, from, to, category, date, departureTime, duration, arrivalTime, price, aircraft, airline, stops } = flightData;
    return (
        <div className="flight-booking-detail">
            <div className="flight-booking-title">
                <div className="booking-title-text">Your Booking Detail</div>
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
                <div className="booking-flight-text">
                    <h6 className="operator-info">Tpm Line</h6>
                    <h6 className="operator-info">Operated by {airline} Airlines</h6>
                    <h6 className="operator-info">{category} | Flight {flightNo} | Aircraft {aircraft}</h6>
                    <h6 className="operator-info">Adult(s): 25KG luggage free</h6>
                </div>
            </div>
        </div>

    );
}

export default BookingDetails;
