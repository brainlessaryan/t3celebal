import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/cloud-computing.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Get the desired knowledge in the field of Web Development. The course brings to you the beginner to pro level concepts in not only the static front-end work with HTML, CSS, and JS but also the back-end framework incluse of React and Node JavaScript frameworks. Dice into the full stack Web-Dev today.',
      image: WebDevImage,
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Delve into the ideas and methods of Machine Learning with exploration through neural networks, deep learning, and supervised/unsupervised learning methods. Get the desired practical experience with hands-on projects to compete with the real world .',
      image: MLImage,
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Dive deep into the knowledge when it comes to the horizon of Cloud Computing and its major functionalities. Learn not only the basics of cloud computing but also the major service providers for cloud like Amazon Web Services(AWS), MS Azure, and Google Cloud Platform(GCP). Investigate technologies for cloud architecture , virtualization, and containership.',
      image: CloudImage,
    },
  ];

  return (
    <div className="course-section">
      <div className="course-container">
        {courses.map((course, index) => (
          <div className={`course-card ${index % 2 === 0 ? 'course-section-even' : 'course-section-odd'}`} key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Dive In
              </Link>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
