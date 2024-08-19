import myimg from "../../src/vishnu3.jpg";
import { Typewriter } from 'react-simple-typewriter'
import pdf from '../resume.pdf';


function Home() {

   
    return <>
        <div className="container">
            <div className="row" style={{ "marginTop": "3em" }}>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-sm-2 col-mg-2 col-2"></div>


                        <div className="col-lg-11 col-xl-11  col-sm-8 col-mg-8 col-8">
                            <img src={myimg} className="img-fluid firstimg animate__animated animate__slideInLeft"  />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6  p-5 animate__animated animate__fadeInRight"  >
                    <h1 className="hi" >Hi,</h1>
                    <h1 className="name" >I'm G R Vishnu Kumar,</h1>
                    <h2 className="position text-light" >A <span className=" fw-bolder" style={{"color":"#B530D9"}}>
                        <Typewriter
                            words={['WEB DEVELOPER .', 'MERN STACK DEVELOPER .','FULL STCK DEVELOPER']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></span>  </h2>
                    <p className="pt-4 fs-5 fw-light text-start text" >I am Front-end Developer, I'll help you bulid beautiful
                        websites your users will love.</p>
                    <a href={pdf} target="_blank" >  <button className="btncv"> View CV </button></a>
                </div>


            </div>
        </div>
    </>
}

export default Home