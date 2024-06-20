import React from 'react';
import '../CSS/Nav2.css'; 
import plane_img from '../images/plane-2.png';
import vaction_img from '../images/vacation.png';
    
function Nav2({children}) {
    return (<div className="nav-container">
        <div className='a'></div>
        <div className='vaction-div'>
            <img className='vacation-img' src={vaction_img}/>
        </div>

        <div className='content'>
            {children}
        </div>
        
        <div className='plane'>
            <img className='plane-img' src={plane_img}/>
        </div>
        <div className='b'></div>
    </div>);
}

export default Nav2;
