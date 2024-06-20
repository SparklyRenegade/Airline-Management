import { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import '../CSS/SignIn.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../authContext";

function SignIn() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    function changeHandler(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    async function HandleSubmitUser(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token',data['user'])
                login(data['user'])
                toast.success("Login successful!");
                navigate('/home');
            } else {
                toast.error(data.message || "Authentication failed");
            }
        } catch (error) {
            toast.error("Network error, please try again later");
            console.error("Network error:", error);
        }
    }

    return (
        <div className="signin-container rounded-lg">
            <form className="m-0 pl-4 pr-4 pb-4">
                <div className="pt-4">
                    <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        onChange={changeHandler}
                        value={formData.username}
                        required
                    ></input>
                </div>
                <div>
                    <input
                    placeholder="Password"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                        value={formData.password}
                        required
                    ></input>
                </div>
                <div className="flex justify-center items-center">
                    <button className="inline text-white rounded text-l mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..." onClick={HandleSubmitUser}>Sign In</button>
                    <Link className="ml-10 text-blue-500" to="/admin_login">Sign In as Admin</Link>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
