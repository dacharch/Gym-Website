
import {programsData} from "../../data/programsData" ;
import RightArrow from "../../assets/rightArrow.png"

import "./Program.css"

export default function Program(){
     return(
          <div className="Programs" id="programs">
                <div className="programs-header">
                     <span className="stroke-text">Explore our</span>
                     <span >Programs</span>
                     <span className="stroke-text">to shape you</span>
                </div>   



                <div className="program-categories">
                    {
                         programsData.map((program) =>(
                            <div className="category">
                               {program.image}
                               <span>{program.heading}</span>
                               <span>{program.details}</span>
                               <div className="join-name">
                                    <span>Join Now</span>
                                    <img src={RightArrow} />
                               </div>    
                            </div> 
                         ))
                    }
                </div>            
          </div>
     )
}