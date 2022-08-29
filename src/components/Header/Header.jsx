import React,{useState} from 'react'
import {Link} from 'react-scroll'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);

  return (
    <>
        <div className="header">
          <img className="logo" src={Logo} alt=""/>
          {menuOpend === false &&  mobile===true ? (
            <div>
              <img 
                style={{
                  width: '1.5rem', 
                  height: '1.5rem',
                  backgroundColor: 'gray',
                  padding: '1rem'
                }}
                src={Bars} 
                alt="" 
                onClick={
                  ()=>{setMenuOpend(true);}
                }/>
            </div>
            ) : (
            <ul className="header-menu">
              <li>
                <Link
                  to='header'
                  span={true}
                  smooth={true}
                  onClick={()=>{setMenuOpend(false);}}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='Programs'
                  span={true}
                  smooth={true}
                  onClick={()=>{setMenuOpend(false);}}
                >
                  Programs
                </Link>  
              </li>
              <li>
                <Link
                  to='Join'
                  span={true}
                  smooth={true}
                  onClick={()=>{setMenuOpend(false);}}
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  to='Plans'
                  span={true}
                  smooth={true}
                  onClick={()=>{setMenuOpend(false);}}
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  to='testminials'
                  span={true}
                  smooth={true}
                  onClick={()=>{setMenuOpend(false);}}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          )}
        </div>
    </>
  )
}

export default Header