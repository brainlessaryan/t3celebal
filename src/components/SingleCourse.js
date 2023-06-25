import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCourse.css';

const SingleCourse = () => {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      content: 'Course content for Web Development',
      tableOfContents: [
        { heading: 'HTML', videoId: 'HcOc7P5BMi4' },
        { heading: 'CSS', videoId: 'ESnrn1kAD4E' },
        { heading: 'JavaScript', videoId: 'htznIeWKgg8' },
        { heading: 'Responsive Web Design', videoId: 'GeykycZ4Ixs' },
      ],
    },
    {
      id: 2,
      title: 'Machine Learning',
      content: 'Course content for Machine Learning',
      tableOfContents: [
        { heading: 'Introduction to Machine Learning', videoId: 'lsf060bLH_Y' },
        { heading: 'Linear Regression', videoId: 'E5RjzSK0fvY' },
        { heading: 'Polynomial Regression', videoId: 'Y90NTNG_yJg' },
        { heading: 'Decision Trees', videoId: 'iQwtIVfQV0o' },
        { heading: 'XGBoost Regression', videoId: 'gPciUPwWJQQ'},
      ],
    },
    {
      id: 3,
      title: 'Cloud Computing',
      content: 'Course content for Cloud Computing',
      tableOfContents: [
        { heading: 'Introduction to Cloud Computing', videoId: 'M988_fsOSWo' },
        { heading: 'Amazon Web Services (AWS)', videoId: 'k1RI5locZE4' },
        { heading: 'Microsoft Azure', videoId: 'tDuruX7XSac' },
        { heading: 'Google Cloud Platform (GCP)', videoId: 'jpno8FSqpc8' },
      ],
    },
  ];

  const selectedCourse = courses.find((course) => course.id === Number(id));

  const [activeHeading, setActiveHeading] = useState(
    selectedCourse?.tableOfContents[0]?.heading || ''
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  const activeContent = selectedCourse.tableOfContents.find(
    (content) => content.heading === activeHeading
  );

  return (
    <div className="single-course">
      <div className="sidebar">
        <ul className="content-list">
          {selectedCourse.tableOfContents.map((content, index) => (
            <li
              key={index}
              className={content.heading === activeHeading ? 'active' : ''}
              onClick={() => handleHeadingClick(content.heading)}
            >
              {content.heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2 className="content-title">{selectedCourse.title}</h2>
        <div className="video-container">
          {activeContent ? (
            <iframe
              title="Embedded Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeContent.videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
