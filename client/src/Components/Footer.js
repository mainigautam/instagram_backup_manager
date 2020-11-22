import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
             <div className='footNav footText'>
                <Link to="/timeline">
                    <div className='footBut'>
                        <i className="fas fa-2x fa-clock"></i>
                        <div className="footText">
                            Timeline
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
