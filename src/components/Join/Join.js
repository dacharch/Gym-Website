
import { useRef } from "react"

import "./Join.css"

export default function Join(){
    const form = useRef() ;
    return(
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                 <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                 </div>
                 <div>
                   <span >YOUR BODY</span>
                    <span className="stroke-text">WITH US</span>
                 </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container">
                    <input 
                         type="email"
                         name="user_email"
                         placeholder="Type Your Email" 
                     />
                      <button className="btn btn-join">Join now</button>
                      

                </form>
                   
            </div>
        </div>
    )
}