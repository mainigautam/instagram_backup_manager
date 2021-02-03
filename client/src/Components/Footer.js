import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
             <div className='footNav footText'>
                <Link to="/reels">
                    <div className='footBut'>
                        <i className="fas fa-2x fa-film"></i>
                        <div className="footText">
                            Reels
                        </div>
                    </div>
                </Link>
                <Link to="/direct">
                    <div className='footBut'>
                        <i className="fas fa-2x fa-paper-plane"></i>
                        <div className="footText">
                            Direct
                        </div>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className='footBut'>
                        <i className="fas fa-2x fa-user"></i>
                        <div className="footText">
                            Profile
                        </div>
                    </div>
                </Link>
                <Link to="/media">
                    <div className='footBut'>
                        <i className="fas fa-2x fa-photo-video"></i>
                        <div className="footText">
                            Stories
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default Footer
