import React from 'react';
import './StudentProgress.css'; // Assuming you have some external CSS

const StudentProgress = () => {
    // Example student data
    const studentData = {
        profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
        fullName: 'John Doe',
        uniqueID: '21232',
    };

    // Example progress data
    const progressData = {
        courseComplete: 65, // in percentage
        lessonComplete: {
            completed: 60,
            total: 85,
        },
        quizComplete: {
            completed: 15,
            total: 25,
        },
        regularityType: 'Regular',
    };

    return (
        <div className="student-progress-container">
            {/* Child's Profile Section */}
            <div className="student-profile">
                <img src={studentData.profilePicture} alt="Child Profile" className="profile-picture" />
                <div className="student-info">
                    <h2>{studentData.fullName}</h2>
                    <p>Student Unique ID: {studentData.uniqueID}</p>
                </div>
            </div>

            <h1>Student Progress</h1>

            {/* Course Complete */}
            <div className="progress-item">
                <h2>Course Complete:</h2>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progressData.courseComplete}%` }}
                    >
                        {progressData.courseComplete}%
                    </div>
                </div>
            </div>

            {/* Lesson Complete */}
            <div className="progress-item">
                <h2>Lesson Complete:</h2>
                <p>{progressData.lessonComplete.completed} / {progressData.lessonComplete.total}</p>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${(progressData.lessonComplete.completed / progressData.lessonComplete.total) * 100}%` }}
                    >
                        {((progressData.lessonComplete.completed / progressData.lessonComplete.total) * 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            {/* Quiz Complete */}
            <div className="progress-item">
                <h2>Quiz Complete:</h2>
                <p>{progressData.quizComplete.completed} / {progressData.quizComplete.total}</p>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${(progressData.quizComplete.completed / progressData.quizComplete.total) * 100}%` }}
                    >
                        {((progressData.quizComplete.completed / progressData.quizComplete.total) * 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            {/* Regularity Type */}
            <div className="regularity-type">
                <h2>Regularity Type:</h2>
                <p>{progressData.regularityType}</p>
            </div>
        </div>
    );
};

export default StudentProgress;
