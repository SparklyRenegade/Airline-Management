import React, { useContext, useState } from 'react';
import '../CSS/FlightCard.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../authContext';
import route_plan from '../images/route-plan.png';
import icon_2 from '../images/icon-2.png';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function FlightCard({flightData, setBookFlightData }) {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [FDBtnActive, setFDBtnActive] = useState(false);


    const { flightNo, from, to, category, date, departureTime, duration, arrivalTime, price, aircraft, airline, stops } = flightData;

    async function book_flight(event) {
        event.preventDefault();
        if (!isAuthenticated) {
            toast.error("Login first to book flight");
            navigate('/login');
            return;
        }

        try {
            setIsLoading(true)
            const response = await fetch('http://127.0.0.1:8080/api/canbook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ flightNo })
            });

            const data = await response.json();
            if (data.canbook) {
                setBookFlightData(flightData);
                navigate('/book_flight');
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
            } else {
                toast.error(data.message || "Booking failed");
            }
        } catch (error) {
            toast.error("Network error, please try again later");
        }
    }

    function toggleFlightDetails() {
        setFDBtnActive(!FDBtnActive);
    }

    return (
        <div className="flight-card">
            <div className="flight-block">
                <div className="flight-area">
                    <div className="airline-name">
                        <img src={icon_2} alt="United Dubai Airlines" className="airline-logo" />
                        <div className="airline-info">
                            <h5 className="airline-name-text">{airline}</h5>
                            <h6 className="aircraft-type">{aircraft}</h6>
                        </div>
                    </div>
                    <div className="flight-detail">
                        <div className="flight-departure">
                            <h5 className="departure-time">{departureTime}</h5>
                            <h5 className="departure-location">{from}</h5>
                        </div>
                        <div className="from-to-wrapper">
                            <span>To</span>
                            <div className="from-to">
                                <h5 className="duration">{duration}</h5>
                                <img src={route_plan} alt="Route Plan" className="route-plan" />
                                <h6 className="stops">{stops} Stop</h6>
                            </div>
                            <span>From</span>
                        </div>
                        <div className="flight-departure">
                            <h5 className="arrival-time">{arrivalTime}</h5>
                            <h5 className="arrival-location">{to}</h5>
                        </div>
                    </div>
                    <div className="flight-button">
                        <div className="amount">
                            <h6 className="price-label">Price</h6>
                            <h5 className="price">${price}</h5>
                        </div>
                        <button onClick={book_flight} className="book-button">Book Now</button>
                    </div>
                </div>
                <hr className="separator" />
                <div className="flight-summary">
                    <h5 className="flight-date">{date}</h5>
                    <div>
                        <button onClick={toggleFlightDetails} className="flight-detail-button">
                            {FDBtnActive?(<><SlArrowUp className='arrow-icon'/>Flight Detail</>):(<><SlArrowDown className='arrow-icon'/>Flight Detail</>)}
                        </button>
                    </div>
                </div>
            </div>

            {FDBtnActive && (
                <div id="unitedDubai" className="flight-detail-section">
                    <div className="flight-times">
                        <h6 className="flight-date-detail">{date}</h6>
                        <h6 className="detailed-departure-time">{`Monday, ${date} - ${departureTime}`}</h6>
                        <h6 className="detailed-duration">{duration}</h6>
                        <h6 className="detailed-arrival-time">{`Monday, ${date} - ${arrivalTime}`}</h6>
                    </div>
                    <div className="detail-block">
                        <div className="flight-icon-div">
                            <img src={icon_2} alt="Flight Icon" className="flight-icon" />
                        </div>
                        <div className="flight-content">
                            <h6 className="operator-name">Tpm Line</h6>
                            <h6 className="operated-by">Operated by Feel Dubai Airlines</h6>
                            <h6 className="flight-category">{category} | Flight {flightNo} | Aircraft {aircraft}</h6>
                            <h6 className="luggage-info">Adult(s): 25KG luggage free</h6>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FlightCard;
