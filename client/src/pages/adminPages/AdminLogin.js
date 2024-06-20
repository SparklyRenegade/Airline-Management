import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import '../../CSS/adminlogin.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../authContext";
import Loading from "../../components/Loading";

function AdminLogin() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    useState(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const changeHandler = (event) => {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmitAdmin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8080/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data['user']);
                login(data['user']);
                toast.success("Login successful!");
                navigate('/admin_dashboard');
            } else {
                toast.error(data.message || "Authentication failed");
            }
        } catch (error) {
            toast.error("Network error, please try again later");
            console.error("Network error:", error);
        }
    };

    return (
        <div className={isLoading ? 'loading' : 'loaded'}>
            <Loading isLoading={isLoading} />
            {!isLoading && (
                <div className="content_">
                    <Navbar />
                    <div className="signin-container-admin">
                        <form onSubmit={handleSubmitAdmin} className="pt-4 pl-4 pr-4 rounded-lg">
                            <div>
                                <input
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    onChange={changeHandler}
                                    value={formData.username}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                    value={formData.password}
                                    required
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="inline text-white rounded text-l m-auto mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..." type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminLogin;
