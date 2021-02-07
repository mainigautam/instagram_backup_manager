import React from 'react'
import '../style/gallery.css'

const Modal2 = ({url,show,close,caption,date}) => {
    if(!show){
        return( <div style={{display: "none"}} className="modalBlur" onClick={close}>
                 <span onClick={close} className="modalClose">&times;</span>
                 <div className="ImageModal" style={{display: show? "block" : "none"}}>
                     <div className="modalDiv">
                         <img src="" alt="" className="modalImage" onClick={close}/>
                     </div>
                 </div>
             </div>
         )}else{
        return(
            <div style={{display: show? "block" : "none"}} className="modalBlur">
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ReelModal" style={{display: show? "block" : "none"}}>
                    <div className="ReelDiv">
                        <video controls className="ReelVideo" autoPlay>
                            <source src={`${url}`} type="video/mp4"/>
                        </video>
                        <div className="ReelCaption">
                            Caption:{caption}
                        </div>
                        <div className="ReelUpDate">
                            {new Date(date).toDateString()}
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}


export default Modal2;