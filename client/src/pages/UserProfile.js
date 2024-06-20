import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../components/Loading';
import '../CSS/UserProfile.css';
import '../CSS/Loading.css';

function UserProfile() {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        address: ""
    });

    async function fetch_data() {
        try {
            const response = await fetch('http://localhost:8080/api/getuserdetails', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await response.json();

            if (response.ok) {
                setUserData(data.user);
                setFormData({
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    mobile: data.user.mobile,
                    address: data.user.address
                });
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
            } else {
                toast.error(data.message || "Error Occurred");
            }
        } catch (error) {
            toast.error("Network error, please try again later");
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 1500);
        }
    }

    useEffect(() => {
        fetch_data();
    }, []);

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost:8080/api/updateuserdetails', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setUserData(data.user);
                setIsEditing(false);
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
                toast.success("Profile updated successfully!");
            } else {
                toast.error(data.message || "Error Occurred");
            }
        } catch (error) {
            toast.error("Network error, please try again later");
        }
    }

    return (
        <>
            <div className={isLoading ? 'loading' : 'loaded'}>
                <Loading isLoading={isLoading} />
                <div className="content_">
                    <Navbar />
                    {
                    !isEditing ? (
                    <div className="user-profile-container">
                        <h2>User Profile</h2>
                        <div className="user-info">
                            <div className='user1'>
                                <div className='user2'>First Name</div>
                                <div className='user3'>{userData.firstName}</div>
                            </div>
                            <hr/>
                            <div className='user1'>
                                <div className='user2'>Last name</div>
                                <div className='user3'>{userData.lastName}</div>
                            </div>
                            <hr/>
                            <div className='user1'>
                                <div className='user2'>Mobile</div>
                                <div className='user3'>{userData.mobile}</div>
                            </div>
                            <hr/>
                            <div className='user1'>
                                <div className='user2'>Address</div>
                                <div className='user3'>{userData.address}</div>
                            </div>
                            <hr/>
                            <div className='user1'>
                                <div className='user2'>Username</div>
                                <div className='user3'>{userData.username}</div>
                            </div>
                            <hr/>
                            <div className='user1'>
                                <div className='user2'>Email</div>
                                <div className='user3'>{userData.email}</div>
                            </div>
                        </div>
                        <button className="inline text-white rounded text-l mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..." onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                    ) : (
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    required
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    required
                                />
                            </div>
                            <div>
                                <label>Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={changeHandler}
                                    required
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={changeHandler}
                                    required
                                />
                            </div>
                            <button className="inline text-white rounded text-l mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..." type="submit">Update</button>
                            <button className="inline text-white rounded text-l mt-6 font-bold p-2 sm:w-[8rem] transition duration-500 ease-in-out bg-blue-600 hover:bg-slate-300 hover:text-black transform hover:-translate-y-1 hover:scale-110 ..." type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    </div>
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default UserProfile;