import { Component } from "react";
import emailjs from 'emailjs-com';
import location from "../../src/location.png";
import phone from "../../src/phone.png";
import email from "../../src/email.png";
import linkedin from "../../src/linkedin.png";



class Contact extends Component {
    constructor() {
        super()
        this.state = {
            "name": "",
            "user_email": "",
            "message": "",
        }
    }
    getdata = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    clearState = () => {
        this.setState({
            "name": "",
            "user_email": "",
            "message": "",
        })
    }
    sendemail = (e) => {
        if (this.state.name == "" && this.state.user_email == "" && this.state.message == "") {
            alert("Please fill all the Fields.")
            return false
        }

        e.preventDefault();

        emailjs.sendForm('service_s4bhgsf', 'template_k43prva', e.target, '4B6ZGbpkbRsJv5u1w')
            .then((response) => {
                console.log('Email sent successfully!', response);
                this.clearState()
            })
            .catch((error) => {
                console.log('Error sending Email', error)
            })

        console.log("Message Send Successfully")

        alert("Email Send Successfully")


    }


    render() {


        return <>
            <h1 className="text-center text-light display-6 about">Contact <span className="me">Me</span></h1>

            <div className="container">
                <form className="row " onSubmit={this.sendemail}>
                    <div className="col-lg-6 col-sm-6 col-6  col-md-12 pt-2">
                    <h4 style={{"color":"#B530D9"}}>Get in Touch</h4>

                        <div className="formrow  ">
                            <div className="formcol pt-3" ><label>Name : </label></div>
                            <div className="formcol"><input type="text" className="input" name="name" onChange={this.getdata} value={this.state.name} /></div>
                        </div>
                        <div className="formrow ">
                            <div className="formcol"><label>Email :</label></div>
                            <div className="formcol"><input type="email" className="input" name="user_email" onChange={this.getdata} value={this.state.user_email} /></div>
                        </div>
                        <div className="formrow ">
                            <div className="formcol"> <label>Message : </label></div>
                            <div className="formcol"> <textarea type="text" style={{ "resize": "none" }} className="input" name="message" onChange={this.getdata} value={this.state.message} /></div>
                        </div>
                        <div>
                            <button className="formbtn animated jello infinite"  >Send Message</button>
                        </div>
                       



                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-12 pt-3">
                        <h4 className=" text-info contact">Contact Info</h4>
                        <p className="pt-4 text-light add"><img src={location} className="location" /> 60/84, Velupillai Street, Villapuram Mardurai - 625012.</p>
                        <p className="pt-2 text-light  add "><img src={phone} className="phone" />  7695920538</p>
                        <p className="pt-2 text-light  add"><img src={email} className="phone" /> vishnukumarramakodi@gmail.com</p>
                        <p className="pt-2 text-light  add"><img src={linkedin} className="phone" /> <a href='https://www.linkedin.com/in/vishnu-kumar-8405202ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="linkedin">https://www.linkedin.com/in/vishnu-kumar-8405202ab</a></p>
                        <div>
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.516651786641!2d78.12149307229303!3d9.900115467479967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c56f886dca8b%3A0xcc7faff0f5b318f5!2sVelupillai%20St%2C%20Villapuram%2C%20Tamil%20Nadu%20625012!5e0!3m2!1sen!2sin!4v1716275846157!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe></p>
                </div>
                    </div>
                </form>
               
            </div>

        </>
    }
}
export default Contact