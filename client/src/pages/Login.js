import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";
import CreateAccount from "../components/CreateAccount";
import { useState } from "react";
import '../CSS/Login.css';
import Loading from "../components/Loading";

function Login() {
    const [signIn, setSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);

    const backgroundStyle = {
        backgroundImage: 'url(/loginImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={isLoading ? 'loading' : 'loaded'}>
            <Loading isLoading={isLoading} />
            <div className="content_">
                <div>
                    <Navbar />
                    <div className="wrapper flex items-center h-screen justify-start bg-slate-200">
                        <div className="login-container bg-white min-w-[28rem] mx-auto pt-8 p-6 rounded-2xl">
                            <div className="login-options flex items-center h-[40px] justify-around">
                                <button className={signIn ? "active h-full w-[4.3rem] rounded bg-blue-500" : "h-full w-[4.3rem] rounded bg-slate-100"} onClick={() => setSignIn(true)}>Sign In</button>
                                <button className={!signIn ? "active h-full w-[8rem] rounded bg-blue-500" : "h-full w-[8rem] rounded bg-slate-100"} onClick={() => setSignIn(false)}>Create Account</button>
                            </div>
                            {signIn ? <SignIn /> : <CreateAccount setSignIn={setSignIn} />}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default Login;
