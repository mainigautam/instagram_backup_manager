import React from 'react'
import '../style/gallery.css'

function MiniModal({url,show,close}) {
    
    if(show && url.split('.').pop() === "mp4"){
    return (
            <div style={{display: show? "block" : "none"}} className="MiniModalBlur" onClick={close}>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <video controls className="MiniModalVideo">
                            <source src={url} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
    )}else if(show && url.split('.').pop() === "jpg"){
        return (
            <div style={{display: show? "block" : "none"}} className="MiniModalBlur" onClick={close}>
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <img src={url} alt="" className="MiniModalImage" onClick={close}/>
                    </div>
                </div>
            </div>
    )}else if(close){
       return( <div style={{display: "none"}} className="MiniModalBlur" onClick={close}>
                <span onClick={close} className="modalClose">&times;</span>
                <div className="ImageModal" style={{display: show? "block" : "none"}}>
                    <div className="modalDiv">
                        <img src="" alt="" className="MiniModalImage" onClick={close}/>
                    </div>
                </div>
            </div>
        )}
}


export default MiniModal
