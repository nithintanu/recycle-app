import React from 'react';
import './Navbar.css';
import Media from './Media.jpg';
import logo from './logoreborn.png'


const Navbar = () => {
    return (
        <div>
            <div className='n-wrapper'>
                <div className='logoimg'><img className='img2' src={logo} alt="hello" /></div>
                <div className="n-left">ReBorN</div>
                <div className="n-right">
                    <ul className='dropdown' style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Contact</li>
                        <select>
                            <option value="">Location</option>
                            <option value="Anil Neerukonda Institute of technology and sciences">Anil Neerukonda </option>
                            <option value="location2">Gayatri Vidya Parishad</option>
                            <option value="location3">Vignan College</option>
                        </select>
                        <div className='profile'><img className='img1' src={Media} alt='name' /></div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar
