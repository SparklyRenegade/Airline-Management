import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchForm({setViewFlightData}){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        date: "",
        category: ""
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8080/api/searchFlight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log(response.status);
                setViewFlightData(data.flights);
                navigate('/view_flights');
            } else {
                toast.error(data.message || "Error Occurred");
            }
        } catch (error) {
            console.log(error);
            toast.error("Network error, please try again later");
        }
    }



    return(
        <div className='bg-slate-100 pt-5 pb-5'>
        <div className="contact-container bg-white">
                <form onSubmit={submitHandler}>
                    <div className='first1-line'>
                        <div>
                            <input
                                type="text"
                                placeholder='From'
                                name="from"
                                onChange={changeHandler}
                                value={formData.from}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='To'
                                name="to"
                                onChange={changeHandler}
                                value={formData.to}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='second1-line'>
                        <div>
                            <input
                                type="date"
                                name="date"
                                placeholder='Date'
                                onChange={changeHandler}
                                value={formData.date}
                                required
                            />
                        </div>
                        <div>
                            <select
                                name="category"
                                onChange={changeHandler}
                                value={formData.category}
                                required
                            >
                                <option value="">Category</option>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First">First Class</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-span-2 flex justify-center mt-4">
                         <button type="submit" className="inline text-white rounded text-l mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ...">View Flights</button>
                    </div>  
                </form>
            </div>
            </div>
    );
}

export default SearchForm;