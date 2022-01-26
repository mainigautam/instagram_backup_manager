import React from 'react'
import '../style/profile.css'
const StatModal = ({followers,following,shw,selection,close}) => {
    if(selection==="followers"){
        return (
                <div style={{ display : shw ? "block" : "none"}} className="statBlur">
                    <div className="statModal">
                        <div className="statHeader">
                        <span onClick={close} className="statModalClose">&times;</span>
                            Followers
                        </div>
                        <div className="statArea">
                            { followers === undefined ?
                            `No ${followers}`                            
                            : followers.map((d,i)=>{
                                    return(
                                            <div className="connection" key={i}>
                                                <div className="connectionInitial">
                                                    {d.string_list_data[0].value[0]}
                                                </div>
                                                <div key={i} className="connectionName">
                                                    {d.string_list_data[0].value}
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
                                { following === undefined?
                                    `No ${following}`
                                   : following.map((d,i)=>{
                                        return(
                                                <div className="connection" key={i}>
                                                    <div className="connectionInitial2">
                                                        {d.string_list_data[0].value[0]}
                                                    </div>
                                                    <div key={i} className="connectionName">
                                                        {d.string_list_data[0].value}
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
