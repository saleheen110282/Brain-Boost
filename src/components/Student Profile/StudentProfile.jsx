import React, { useState } from 'react';
import './StudentProfile.css'; // Assuming you have some external CSS

const StudentProfile = () => {
    // Example state for student details, progress, and enrolled courses
    const [student] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
        bio: 'A passionate learner and web development enthusiast.',
        enrolledCourses: [
            { id: 1, name: 'Frontend Development', progress: 75 },
            { id: 2, name: 'React Masterclass', progress: 45 },
            { id: 3, name: 'JavaScript Essentials', progress: 90 }
        ]
    });

    const handleEditProfile = () => {
        // Handle profile editing logic
        alert('Edit Profile feature coming soon!');
    };

    return (
        <div className="student-profile-container">
            {/* Profile Overview */}
            <div className="profile-header">
                <img src={student.avatar} alt="Student Avatar" className="profile-avatar" />
                <div className="profile-details">
                    <h1>{student.name}</h1>
                    <p>{student.email}</p>
                    <p>{student.bio}</p>
                    <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
                </div>
            </div>

            {/* Enrolled Courses */}
            <div className="enrolled-courses">
                <h2>Enrolled Courses</h2>
                <ul className="course-list">
                    {student.enrolledCourses.map(course => (
                        <li key={course.id} className="course-item">
                            <h3>{course.name}</h3>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${course.progress}%` }}
                                >
                                    {course.progress}%
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Settings */}
            <div className="profile-settings">
                <h2>Settings</h2>
                <ul>
                    <li><button onClick={() => alert('Change Password clicked')}>Change Password</button></li>
                    <li><button onClick={() => alert('Notification Settings clicked')}>Notification Settings</button></li>
                    <li><button onClick={() => alert('Privacy Settings clicked')}>Privacy Settings</button></li>
                </ul>
            </div>
        </div>
    );
};

export default StudentProfile;
