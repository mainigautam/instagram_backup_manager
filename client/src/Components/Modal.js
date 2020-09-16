import React from 'react'
import '../style/gallery.css'

function Modal({url,show,close}) {
    if(show && url.split('.').pop() === "mp4"){
    return (
            <div style={{display: show? "block" : "none"}} className="modalBlur">
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <video controls className="modalVideo">
                            <source src={url} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
    )}else if(show && url.split('.').pop() === "jpg"){
        return (
            <div style={{display: show? "block" : "none"}} className="modalBlur" onClick={close}>
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <img src={url} alt="" className="modalImage" onClick={close}/>
                    </div>
                </div>
            </div>
    )}else if(close){
       return( <div style={{display: "none"}} className="modalBlur" onClick={close}>
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <img src="" alt="" className="modalImage" onClick={close}/>
                    </div>
                </div>
            </div>
        )}
}


export default Modal
