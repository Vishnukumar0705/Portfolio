import { Component } from "react";
import Img2 from "../../src/vishnuai.png";
import logo from "../../src/skill logo.png";
import C from "../../src/C logo.png";
import html from "../../src/HTML.png";
import js from "../../src/js logo.png";
import react from "../../src/react.png";
import css from "../../src/css logo.png";
import git from "../../src/github.png";
import education from "../../src/education.png";
import degree from "../../src/degree.png";
import school from "../../src/school.png";
import nodejs from "../../src/nodejs.png";
import mysql from "../../src/mysql.png";
import mongo from "../../src/mongo.png";


class About extends Component {


    render() {

        return <>
            <h1 className="text-center text-light display-6 about ">About <span className="me">Me</span></h1>
            <section>
                <div className="container">
                    <h3 className="text-center fs-1 fw-bolder" style={{ "paddingTop": "2rem", "color": "#DAA85A" }}>Personal Info</h3>

                    <div className="row pt-5">


                        <div className="col-lg-4 col-md-6 p-5">
                            <img src={Img2} className="img-fluid aboutimg animate__animated animate__backInLeft" />
                        </div>
                        <div className="col-lg-8 col-md-6 pt-5">
                            <div className="row">
                                <div className="col-lg-5  abouttext animate__animated animate__fadeInRight" >

                                    <ul>
                                        <li style={{ "color": "#B530D9", "fontWeight": "bold" }}>First Name<strong className="fw-light text-light" style={{ "marginLeft": "1.4em" }}>Vishnu Kumar</strong> </li>
                                        <li className=" pt-3 fw-bold" style={{ "color": "#B530D9" }}>Age<strong className="fw-light text-light" style={{ "marginLeft": "4.6em" }}>21 </strong> </li>
                                        <li className=" pt-3  fw-bold" style={{ "color": "#B530D9" }}>Address<strong className="fw-light text-light" style={{ "marginLeft": "2.7em" }}>Madurai</strong></li>
                                        <li className=" pt-3  fw-bold" style={{ "color": "#B530D9" }}>Nationality<strong className="fw-light text-light" style={{ "marginLeft": "1.4em" }}>Indian</strong></li>
                                    </ul>
                                </div>
                                <div className="col-lg-7 abouttext animate__animated animate__fadeInLeft" >
                                    <ul>
                                        <li style={{ "color": "#B530D9", "fontWeight": "bold" }}>Last Name<strong className="fw-light text-light" style={{ "marginLeft": "1em" }}>  GiriRamakodi</strong></li>
                                        <li className=" pt-3  fw-bold" style={{ "color": "#B530D9" }}>Phone No <strong className="fw-light text-light" style={{ "marginLeft": "1.3em" }}> 7695920538</strong> </li>
                                        <li className=" pt-3  fw-bold" style={{ "color": "#B530D9" }}>Email<strong className="fw-light text-light" style={{ "marginLeft": "3.5em" }}>   vishnukumarramakodi@gmail.com</strong></li>
                                        <li className=" pt-3  fw-bold" style={{ "color": "#B530D9" }}>Language<strong className="fw-light text-light" style={{ "marginLeft": "1.5em" }}>    Sourastra, Tamil, English</strong></li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                    </div>

                    <section>
                        <div className="container ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className=" fs-1 fw-bolder" style={{ "color": "#DAA85A", "marginTop": "2.5em", "marginLeft": "0em" }}>Skills  <img src={logo} className="img-fluid logo" /></h4>

                                    <div className="row">
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9  ">
                                                    <div className="box" >
                                                        <img src={C} className="img-fluid C  animate__animated animate__bounceInLeft" />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5 " style={{ "marginLeft": "9px" }}>C Language</h3>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={html} className="img-fluid  C  animate__animated animate__bounceInLeft" />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "25px" }}>HTML 5</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3 "></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={js} className="img-fluid js animate__animated animate__bounceInRight " style={{ "width": "110px", "height": "105px", "padding": "25px" }} />
                                                    </div>
                                                    <h3 className=" text-info fs-5" style={{ "marginLeft": "20px", "marginTop": "30px" }}>JavaScript</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9">
                                                    <div className="box ">
                                                        <img src={css} className="img-fluid C  animate__animated animate__bounceInRight" />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "45px" }}>CSS</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box ">
                                                        <img src={react} className="img-fluid C animate__animated animate__bounceInLeft" />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "25px" }}>React js</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={nodejs} className="img-fluid nodejs animate__animated animate__bounceInRight " />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "15px" }}>Node Js</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={mysql} className="img-fluid mysql animate__animated animate__bounceInRight " />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "45px" }}>Mysql</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={mongo} className="img-fluid C animate__animated animate__bounceInRight " />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "25px" }}>GitHub</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 mt-5">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-9 ">
                                                    <div className="box">
                                                        <img src={git} className="img-fluid C animate__animated animate__bounceInRight " />
                                                    </div>
                                                    <h3 className=" pt-4 text-info fs-5" style={{ "marginLeft": "25px" }}>GitHub</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>



            {/* <div className="container">
                    <div className="row ">
                        <div className="col-lg-10 col-sm-6 ">
                            <h3 className="fs-1 fw-bolder edu" style={{ "color": "#DAA85A" }}>Education<img src={education} className="img-fluid education" /></h3>
                        </div>
                        <div className="row">

                            <div className="col-lg-4 col-sm-4 col-md-4">
                                    <ul>
                                        <li>
                                            <div>
                                                <img src={degree} className="degree img-fluid pt-5" />
                                                <p className="year ">2020 - 2023</p></div>
                                            <h3 className="text-light clg pt-2">Degree - Sourashtra College,</h3>
                                            <h5 className="text-secondary cou">Complete Bachelor of Business Administration with 65%.</h5>

                                        </li>
                                    </ul>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4">
                                    <ul className="edudegree1">

                                        <li >
                                            <div> <img src={school} className=" img-fluid pt-5 scl" />
                                                <p className="year1 ">2018- 2020</p></div>
                                            <h3 className="text-light clg pt-2">HSC - Sourashtra Boys Higher Secondary School,</h3>
                                            <h5 className="text-secondary cou ">Complete Higher secondary School with 71%.</h5>
                                        </li>
                                    </ul>
                            </div>

                            <div className="col-lg-4 col-sm-4 col-md-4">
                                    <ul className="edudegree2">
                                        <li >
                                            <div> <img src={school} className=" img-fluid pt-5 scl" />
                                                <p className="year2 ">2020</p></div>
                                            <h3 className="text-light clg pt-2">SSLC - Sourashtra Co-Education Higher Secondary School,</h3>
                                            <h5 className="text-secondary cou">Complete  secondary School with 69%.</h5>
                                        </li>
                                    </ul>
                            </div>
                        </div>

                    </div>

                </div>
             */}
            <div className="container">
            <h3 className="fs-1 fw-bolder edu" style={{ "color": "#DAA85A" }}>Education<img src={education} className="img-fluid education" /></h3>

                <div className="row p-5 ">

                    <div className="col-lg-4 col-sm-9 col-md-6 col-9 ">
                    <div className="maincontainer">
                        <div className="back">
                            <h5 className="pt-5 text-center" style={{"color":"#DAA85A"}}>Sourashtra College, Madurai.</h5>
                            <h5 className="text text-center pt-2">Complete Bachelor of Business Administration with 65%.</h5>

                        </div>
                        <div className="front">
                            <div classname="image">
                                <img src={degree} className="degree img-fluid pt-5 text-center" />
                                <pre className="department text-center">BBA</pre>
                                <p className="year  text-center">2020 - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
           

        
                    <div className="col-lg-4 col-sm-9 col-md-6 col-9 ">
                    <div className="maincontainer">
                        <div className="back">
                            <h5 className="pt-5 text-center" style={{"color":"#DAA85A"}}>Sourashtra Boys Higher Secondary School, Madurai</h5>
                            <h5 className="text text-center pt-2">Complete Higher secondary School with 71%.</h5>

                        </div>
                        <div className="front">
                            <div classname="image">
                            <img src={school} className=" img-fluid pt-5 school" />
                            <pre className="department text-center">HSC</pre>
                                <p className="year  text-center">2018 - 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
           

                    <div className="col-lg-4 col-sm-9 col-md-6 col-9 ">
                    <div className="maincontainer">
                        <div className="back">
                            <h5 className="pt-5 text-center" style={{"color":"#DAA85A"}}>Sourashtra Co-Education Higher Secondary School, Madurai.</h5>
                            <h5 className="text text-center pt-2">Complete  secondary School with 69%.</h5>

                        </div>
                        <div className="front">
                            <div classname="image">
                            <img src={school} className=" img-fluid pt-5 school" />
                            <pre className="department text-center">SSLC</pre>
                                <p className="year  text-center">2018</p>
                            </div>
                        </div>
                    </div>
                </div>
        

                </div>
            </div>

        </>
    }
}
export default About