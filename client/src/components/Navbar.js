import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css'; 
import AuthContext from '../authContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const navigate = useNavigate();
    const  {logout , isAuthenticated}  = useContext(AuthContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // console.log(logout);

    function clickHandlePage(event) {
        navigate(`/${event.target.name}`);
    }

    function clickHandleSignOut() {
        logout();
        //console.log(isAuthenticated);
        toast.info("Logged Out!")
        navigate('/home');
    }

    function clickHandleSignIn() {
        navigate('/login');
    }

    function clickHandleProfile() {
        navigate('/user_profile');
    }

    function toggleDropdown() {
        setDropdownVisible(!dropdownVisible);
    }

    function closeDropdown() {
        setDropdownVisible(false);
    }

    return (
    <div className="navbar-container flex flex-row w-screen h-[70px] items-center justify-between bg-gradient-to-r from-white to-slate-200">


        <div className="logo pt-2 pb-2 h-full pl-2 text-gray-800 text-2xl font-bold">
            <img src='/logo.png' alt="#"></img>
        </div>


        <div className="hidden md:flex h-full flex-grow">
            <div className="nav-links flex flex-auto justify-start md:gap-9 lg:gap-14 h-full md:pl-[5rem] lg:pl-[14rem]">
                <button className="nav-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded hover:bg-gray-300 bg-opacity-75 focus:outline-none transition-colors duration-500" name="home" onClick={clickHandlePage}>Home</button>
                <button className="nav-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded hover:bg-gray-300 bg-opacity-75 focus:outline-none transition-colors duration-500" name="my_flights" onClick={clickHandlePage}>My Flights</button>
                <button className="nav-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded hover:bg-gray-300 bg-opacity-75 focus:outline-none transition-colors duration-500" name="contact" onClick={clickHandlePage}>Contact</button>
                <button className="nav-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded hover:bg-gray-300 bg-opacity-75 focus:outline-none transition-colors duration-500" name="about" onClick={clickHandlePage}>About</button>
            </div>
        </div>


        <div className='hidden md:h-full md:flex'>
            <div className="user-actions pr-5 h-full flex">
                    {isAuthenticated === false ? (
                        <button className="logout-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded bg-none hover:bg-blue-600 hover:text-slate-200 transition-colors duration-500" onClick={clickHandleSignIn}>Login/Signup</button>
                    ) : (
                        <div className="profile-menu relative">
                            <button className="profile-button pl-2 pr-2 mt-3 w-auto min-w-fit rounded bg-none hover:bg-blue-600 focus:outline-none" onClick={toggleDropdown}>User</button>
                            {dropdownVisible && (
                                <div className="dropdown-content absolute top-full right-0 mt-1 bg-white shadow-lg rounded-lg">
                                    <button className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left focus:outline-none" onClick={clickHandleProfile}>Profile</button>
                                    <button className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left focus:outline-none" onClick={clickHandleSignOut}>Sign Out</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
        </div>


        <button className='md:hidden p-4'>
            <FontAwesomeIcon icon={faBars} />
        </button>
    </div>
    );
}

export default Navbar;
