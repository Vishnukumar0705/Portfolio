import Carousel from 'react-bootstrap/Carousel';
import login from '../../src/login page.PNG'
import Test from '../../src/Test page.PNG'
import Result from '../../src/Result.PNG'
import Form from '../../src/Form.PNG'
import Validate from '../../src/Validate Form.PNG'


function Portfolio() {

  
  return (
    <div className="container  black" style={{ "marginTop": "5em" }}>
      <div className="row">

        <div className="col-lg-8"  >

          <Carousel data-bs-theme="dark"  interval={500} className='animate__animated animate__slideInLeft' >
            <Carousel.Item>
              <h3 className='login ' style={{ "color": "#DAA85A" }}>Login Page</h3>
              <img src={login} className='img-fluid' />
            </Carousel.Item>



            <Carousel.Item interval={500}>
              <h3 className='login' style={{ "color": "#DAA85A" }} >Test Page</h3>
              <img src={Test} className='img-fluid' />
            </Carousel.Item>


            <Carousel.Item interval={500}>
              <h3 className='login ' style={{ "color": "#DAA85A" }}>Test Result Page</h3>
              <img src={Result} className='img-fluid' />
            </Carousel.Item>
          </Carousel>
          <h4 className='pt-2' style={{ "color": "#DAA85A" }}>Using<span className='fs-5' style={{"color":"#B530D9"}}> #html #CSS #Javascript</span></h4>
        </div>

 
        <div className="col-lg-4 animate__animated animate__slideInRight" data-aos="fade-left">
          <h2 style={{ "color": "#B530D9","marginTop":"1em" }}>Online Examination</h2>

          <h3 className='text-info pt-3' >Objective:</h3>
          <p><span className='text-light ' >    Develop an online examination preparation platform using <strong className='text-info' >HTML, CSS, JavaScript,</strong> featuring user authentication,
            exam interface design, question bank management, practice tests, and progress tracking.
          </span></p>

          <h3 className='text-info pt-1' >Role:</h3>
          <p><span className='text-light'> Designed the Login page and Question Quiz
            Page and Score display page. </span></p>
        </div>



        <div className='row pt-5'>
          <div className='col-lg-4 pt-5 animate__animated animate__slideInLeft'>
            <h2 style={{ "color": "#B530D9" }} >Form Validation</h2>

            <h3 className='text-info pt-5' >Objective:</h3>
            <p className='pt-3'><span className=' text-light' >Develop an Form Validate to platform using <strong className='text-info'>HTML, CSS, JavaScript,</strong> featuring user authentication,
            Form interface design, Registration Form, and Fill the preview Page.
          </span></p>

          <h3 className='text-info pt-4' >Role:</h3>
          <p className='pt-2'><span className='text-light'> Designed the Form Page and Fill the  validaiton 
            Page and Preview in  display page. </span></p>
          </div>

          <div className='col-lg-8 pt-5' >
            <Carousel data-bs-theme="light" interval={500} className='animate__animated animate__slideInRight'>
              <Carousel.Item>
              <h3 className='login ' style={{ "color": "#DAA85A" }}>Form Validate</h3>
                <img src={Form} className='img-fluid' />
              </Carousel.Item>

              <Carousel.Item interval={500}>
              <h3 className='login ' style={{ "color": "#DAA85A" }}>Preview Page</h3>
                <img src={Validate} className='img-fluid' />
              </Carousel.Item>
            </Carousel>
            <h4 className='pt-2' style={{ "color": "#DAA85A" }}>Using<span className=' fs-5' style={{"color":"#B530D9"}}> #html #CSS #Javascript</span></h4>

          </div>
        </div>
      </div>
    </div>

  )


}
export default Portfolio