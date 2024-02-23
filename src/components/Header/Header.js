import "./Header.css"
import Logo from '../../assets/logo.png'
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {

     const mobile = window.innerWidth <= 768 ? true : false;
     const [menuOpened, setMenuOpened] = useState(false);
     return (
          <div className="header" >
               <img className="logo" src={Logo} alt="" />

               {
                    menuOpened === false && mobile === true ? (
                         <div style={{
                              backgroundColor: 'var(--appColor)'
                              , padding: '0.5rem',
                              borderRadius: '5px'
                         }}
                              onClick={() => setMenuOpened(true)}
                         >
                              <img src={Bars} alt="" style={{
                                   width: '1.8rem', height: '1.5rem'
                              }} />
                         </div>
                    ) : (
                         <ul className="header-menu">
                              <li >
                                   <Link
                                        onClick={() => setMenuOpened(false)}
                                        to="Home"
                                        span={true}
                                        smooth={true}
                                   >
                                        Home
                                   </Link>
                              </li>
                              <li >
                                   <Link
                                        onClick={() => setMenuOpened(false)}
                                        to="Programs"
                                        span={true}
                                        smooth={true}     
                                   >
                                        Programs
                                   </Link>
                              </li>

                              <li onClick={() => setMenuOpened(false)}>
                                   <Link 
                                     to="Why us"
                                     span={true}
                                     smooth={true}
                                   >
                                   </Link>
                                   Why us</li>
                              <li >
                                   <Link 
                                      onClick={() => setMenuOpened(false)}
                                      to="plans"
                                      span={true}
                                      smooth={true}
                                      >
                                      Plans  
                                   </Link>
                              </li>
                              <li >
                                   <Link
                                        onClick={() => setMenuOpened(false)}
                                        to="testimonials"
                                        span={true}
                                        smooth={true}
                                   >
                                        Testmonials
                                   </Link>

                              </li>
                         </ul>
                    )}
          </div>
     )
}