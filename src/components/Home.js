import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Gene-O-Code Website!</h1>
      <h3><b>Please Click On The Sign-Up Button To Fill In Your Details And Enter The Platform.</b></h3>
      <p className="description">Welcome to the abode of the basics of web development, machine learning, and cloud computing. <br/>Have a stroll through all the courses to find the best suitable one for yourself.</p>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button>
    </div>
  );
};

export default Home;
