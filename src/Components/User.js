import React from 'react'
import "./Animation.css"
const User = (props) => {
    return (
        <div style={{ width: "45vw", height: "50vh", background: "#42f578", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {props.on ? <div className='listen-animation' style={{ background: "#0f13db", height: "220px", width: "220px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                <div style={{ background: "yellow", height: "200px", width: "200px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                    {props.user==="ai"?<img src={process.env.PUBLIC_URL+"/ai.jpeg"} style={{height: "200px", width: "200px",borderRadius: "50%",}} />:props.user}
                </div>
            </div> :
                <div style={{ background: "yellow", height: "200px", width: "200px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                    {props.user==="ai"?<img src={process.env.PUBLIC_URL+"/ai.jpeg"} style={{height: "200px", width: "200px", borderRadius: "50%",}} />:props.user}
                </div>
            }
        </div>
    )
}

export default User