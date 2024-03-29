
import {testimonialsData} from "../../data/testimonialsData" ;
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from '../../assets/rightArrow.png'
import { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css" ;

export default function Testimonials(){
     const transition = {type:"spring", duration:3} ;
     const[selected,setSelected] = useState(0) ;
     const tlength = testimonialsData.length ;

     function backButton(){
        selected === 0 ? setSelected(tlength-1): setSelected((prev) => prev-1) ;
     }
     function forwardButton(){
        selected === tlength-1 ? setSelected(0): setSelected((next)=>next+1) ;
         
     }
     return(
            <div className="testimonials">
                 <div className="left-t">
                     <span>Testimonials</span>
                     <span className="stroke-text">What they</span>
                     <span>say about us</span>
                     <motion.span
                        key={selected}
                        initial={{opacity:0,x:-100}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:100}}
                     >
                         {testimonialsData[0].review}
                     </motion.span>
                     <span>
                         <span style={{color: 'var(--orange)'}}>
                             {testimonialsData[selected].name}
                         </span>{" "}
                          -{testimonialsData[selected].status}
                     </span>
                 </div>

                 <div className="right-t">
                   <motion.div
                      initial={{opacity:0,x:-100}}
                      transition={{...transition,duration:2}}
                      whileInView={{opacity:1,x:0}}
                   >
                      
                   </motion.div>
                   <motion.div
                      initial={{opacity:0,x:100}}
                      transition={{...transition,duration:2}}
                      whileInView={{opacity:1,x:0}}
                   >

                   </motion.div>
                   <motion.img
                      key={selected}
                      initial={{opacity:0,x:100}}
                      animate={{opacity:1,x:0}}
                      exit={{opacity:0,x:-100}}
                      transition={transition}
                      src={testimonialsData[selected].image} 
                      alt="" 
                   />

                    <div className="arrows">
                        <img 
                            onClick={backButton}
                            src={leftArrow} 
                            alt="" 
                         />
                        
                        <img 
                          onClick={forwardButton}
                          src={rightArrow} 
                          alt="" 
                        />

                    </div>
                 </div>
            </div>   
     )
}