import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

function PaymentSuccess() {
    let searchParams = useSearchParams()[0];

    const referenceNum = searchParams.get("reference")
    return (
        <div>
            <Navbar />
            <div className="wrapper flex p-20 h-screen justify-start" >
            Payment Successfully completed.<br/>
            reference num - {referenceNum}
            </div>
        </div>
    )
}

export default PaymentSuccess;