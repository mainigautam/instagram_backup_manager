import React from 'react';
import {Link} from 'react-router-dom';
import instaOrig from './insta-orig.png'

const Header = ({profile,direct,show}) => {
    return (
             <div className='headNav'>
                 <div className="headNavLeft">
                  <div className={`backNav ${show?"enableBack":"disableBack"}`}>
                        <Link to="/profile">
                            <i className="fas fa-2x fa-chevron-left white"></i>
                        </Link>
                    </div>
                    <img src={instaOrig} alt="" className='navLogo'/>
                 </div>
                 <div className={`headNavRight ${!show?"enableBack":"disableBack"}`}>
                    <Link to="/direct">
                        <div className='headBut'>
                            <i className={`fas fa-2x fa-paper-plane ${direct ? "icon-selected":""}`}></i>
                        </div>
                    </Link>
                    <Link to="/profile">
                        <div className='headBut'>
                            <i className={`fas fa-2x fa-user ${profile ? "icon-selected":""}`}></i>
                        </div>
                    </Link>
                    <form action="http://localhost:8081/delete" method="post">
                        <button type="submit" className="trash" title="Delete The Backup">
                            <i className="fas fa-2x fa-trash-alt"></i>   
                        </button>
                    </form>
                 </div>
            </div>
    )
}

export default Header
