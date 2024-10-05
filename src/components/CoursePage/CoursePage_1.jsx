import React, { useState } from 'react';
import './CoursePage.css'; // Assuming the CSS is moved to an external file

const CoursePage = () => {
    // Assuming you get the itemId and max from props or API
    const [itemId, setItemId] = useState(0);
    const max = 5; // Example value, replace with actual value
    const courseItems = [
        'Video 1: Introduction to Web Development',
        'Quiz 1',
        'Video 2: Advanced Web Development',
        'Quiz 2',
        'Project 1: Webpage using HTML and CSS',
    ];

    const handleNext = () => {
        if (itemId < max) setItemId(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (itemId > 0) setItemId(prev => prev - 1);
    };

    return (
        <div>
            <section>
                <div className="course-outline">
                    <div className="course-item">
                        <p>{courseItems[0]}</p>
                    </div>
                    <div className="course-item">
                        <p>{courseItems[1]}</p>
                    </div>
                    <div className="course-item">
                        <p><a href="/quiz">Quiz 1</a></p>
                    </div>
                    <div className="course-item">
                        <p>{courseItems[2]}</p>
                    </div>
                    <div className="course-item">
                        <p><a href="/quiz">Quiz 2</a></p>
                    </div>
                    <div className="course-item">
                        <p>{courseItems[3]}</p>
                    </div>
                    <div className="course-item">
                        <p><a href="/project">Project 1: Webpage using HTML and CSS</a></p>
                    </div>
                </div>

                <div className="course-container">
                    <h2>{courseItems[itemId]}</h2>
                    <div className="video-frame">
                        <video controls>
                            <source src="your-video-file.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="course-button">
                        <button onClick={handlePrevious} disabled={itemId === 0}>Previous</button>
                        <button onClick={handleNext} disabled={itemId === max}>Next</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
