import LectureCard from "./LectureCard";
import lectue_1 from "../../assets/lectue_1.png";
import lectue_2 from "../../assets/lectue_2.png";
import lectue_3 from "../../assets/lectue_3.png";
import lectue_4 from "../../assets/lectue_4.png";

export default function Lecture() {
    const courses = [
        {
            image: lectue_1,
            title: "Introduction to React",
            className: "Web Development",
            totalLessons: 12,
            duration: "6 weeks",
            description:
                "Learn the fundamentals of React and build modern web applications.",
            learningOutcomes: [
                "Understand React components",
                "Master state management",
                "Build single-page applications",
            ],
        },
        {
            image: lectue_2,
            title: "Advanced JavaScript",
            className: "Programming",
            totalLessons: 15,
            duration: "8 weeks",
            description:
                "Dive deep into advanced JavaScript concepts and patterns.",
            learningOutcomes: [
                "Master closures and prototypes",
                "Understand async programming",
                "Implement design patterns",
            ],
        },
        {
            image: lectue_3,
            title: "UI/UX Design Principles",
            className: "Design",
            totalLessons: 10,
            duration: "5 weeks",
            description:
                "Learn the core principles of creating effective user interfaces and experiences.",
            learningOutcomes: [
                "Apply color theory in designs",
                "Create user-centered interfaces",
                "Conduct usability testing",
            ],
        },
        {
            image: lectue_4,
            title: "Data Structures and Algorithms",
            className: "Computer Science",
            totalLessons: 20,
            duration: "10 weeks",
            description:
                "Master fundamental data structures and algorithms for efficient problem-solving.",
            learningOutcomes: [
                "Implement common data structures",
                "Analyze algorithm complexity",
                "Solve coding challenges",
            ],
        },
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Featured Courses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <LectureCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
}
