import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import { useState, useContext } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../CSS/Contact.css';
import AuthContext from '../authContext';
import Loading from '../components/Loading';

function Contact({ username }) {
    const isAuthenticated = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);

    const [formData, setFormData] = useState({
        user: "",
        email: "",
        subject: "",
        message: "",
        mobile:"",
        username: username
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    async function submitHandler(event) {
        setIsLoading(true)
        event.preventDefault();
        if (!isAuthenticated) {
            toast.error("Login to send message");
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/api/feedback/addFeedback', { // Update the URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
                toast.success("Message sent successfully");
            } else {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
                toast.error(data.message || "Error Occurred");

            }
        } catch (error) {
            toast.error("Network error, please try again later");
            console.error("Network error:", error);
        }

        setFormData({
            user: "",
            email: "",
            subject: "",
            message: "",
            mobile:"",
            username: username
        });
    };


    return (
        <div className={isLoading ? 'loading' : 'loaded'}>
            <Loading isLoading={isLoading} />
            <div className="content_">
                <Navbar />
                <Nav2>Contact Us</Nav2>
                <div className='h-screen bg-slate-200' >
                    
                    <div className='h-[70px]'></div>
                    <div className="contact-container">
                        <form onSubmit={submitHandler}>
                            <div className='first1-line'>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        onChange={changeHandler}
                                        value={formData.name}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        onChange={changeHandler}
                                        value={formData.email}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className='second1-line'>
                                <div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder='Mobile No.'
                                        onChange={changeHandler}
                                        value={formData.mobile}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder='Subject'
                                        onChange={changeHandler}
                                        value={formData.subject}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='third1-line'>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder='Message'
                                        onChange={changeHandler}
                                        value={formData.message}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <button
                                className="inline text-white rounded text-l mt-4 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..."
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                    
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Contact;
