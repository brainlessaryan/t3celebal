import React from 'react';
import './About.css'
import aboutimg from '../assets/aboutus.jpg';

const About = () => {
    return (
        <div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">Who Are We?</h1>
                    <p>
                        Hello there guys, we have not yet officially gotten a chance to introduce ourselves. So here
                        we are. This website has been designed with the sole purpose of making the basics of computer
                        programming in terms of Web Development, Machine Learning, and Cloud Computing. We strive to
                        provide the best possible source out there in the wide ocean we call the internet.</p>
                    <p>
                        This app has been designed and built by Aryan Prasad of KIIT University, Bhubaneshwar as a 
                        part of the third week task under the <b>CELEBAL TECH</b> summer internship program. The 
                        application is solely built with the help of three components, namely, <b>React JS
                        (JavaScript), HTML(Hyper-Text-Markup-Language), and CSS(Cascading Style Sheets).</b>
                    </p>
                    <p>
                        Also, do not forget to get in touch with me on the details provided below at times of any
                        doubts, issues faced and even just some chat at times.<br/> <b>STAY SAFE, STAY HAPPY AND KEEP 
                        LEARNING</b>
                    </p></div>
                <div className="About-image">
                    <img src={aboutimg}
                        alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
