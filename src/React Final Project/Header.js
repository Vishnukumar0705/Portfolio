import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Portfolio from './Portfolio';
import insta from '../../src/insta.png'
// import facebook from '../../src/facebook.png'


function Header() {
    let mystyle = ({ isActive }) => {
        return {
            "color": isActive ? "#DAA85A" : "#e9ecef",
            "textDecoration": "none",
            "marginTop": isActive ? "2px"  : "0px",
            "fontWeight": isActive ? "bolder" : "normal"
        }
    }
    let btn = {
        "backgroundColor": "#DAA85A",
    }
    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <Navbar collapseOnSelect  expand="lg"  className='top'>
                        <Navbar.Brand href="/" className=' fw-bolder fs-4 '  style={{"color":"#B530D9"}}>PORTFOLIO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={btn} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink style={mystyle} className="p-3 fs-5 " to="/">Home</NavLink>
                                <NavLink style={mystyle} className="p-3 fs-5 " to="about">About Me</NavLink>
                                <NavLink style={mystyle} className="p-3 fs-5 " to="resume">Project</NavLink>
                                <NavLink style={mystyle} className="p-3 fs-5 " to="contact">Contact Me</NavLink>
                            </Nav>
                            <Nav className='link1'>

                                <h4 className='h5' style={{"color":"#B530D9"}}>Follow Us </h4>
                                <a href='https://www.instagram.com/invites/contact/?igsh=13f84ziwjncix&utm_content=k1pamh1' target='_blank' className='link '><img src={insta} className='insta'/>Instagram </a>
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={< Portfolio/>} />
            <Route path='contact' element={<Contact />} />
        </Routes>

       
    </>

}
export default Header