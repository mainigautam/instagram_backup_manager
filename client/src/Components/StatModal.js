import React from 'react'
import '../style/profile.css'
const StatModal = ({connections,shw,selection,close}) => {
    if(selection==="followers"){
        return (
                <div style={{ display : shw ? "block" : "none"}} className="statBlur">
                    <div className="statModal">
                        <div className="statHeader">
                        <span onClick={close} className="statModalClose">&times;</span>
                            Followers
                        </div>
                        <div className="statArea">
                            { connections.followers === undefined ?
                            `No ${connections}`                            
                            : Object.keys(connections.followers).map((d,i)=>{
                                    return(
                                            <div className="connection">
                                                <div className="connectionInitial">
                                                    {d[0]}
                                                </div>
                                                <div key={i} className="connectionName">
                                                    {d}
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        )
    }else{
        return (
                <div style={{ display : shw ? "block" : "none"}} className="statBlur">
                        <div className="statModal">
                            <div className="statHeader">
                            <span onClick={close} className="statModalClose">&times;</span>
                                Following
                            </div>
                            <div className="statArea">
                                { connections.following === undefined?
                                    `No ${connections}`
                                   : Object.keys(connections.following).map((d,i)=>{
                                        return(
                                                <div className="connection" key={i}>
                                                    <div className="connectionInitial2">
                                                        {d[0]}
                                                    </div>
                                                    <div key={i} className="connectionName">
                                                        {d}
                                                    </div>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
        )
    }
}

export default StatModal
