import LectureCard from "./LectureCard";
import lectue_1 from "../../assets/lectue_1.png";
import lectue_2 from "../../assets/lectue_2.png";
import lectue_3 from "../../assets/lectue_3.png";
import lectue_4 from "../../assets/lectue_4.png";

export default function Lecture() {
    const courses = [
        {
            image: lectue_1,
            title: "Advanced C Programming",
            totalLessons: 8,
            duration: "5 weeks",
            learningOutcomes: [
                "Learn to code like a pro",
                "Project based learning",
            ],
        },
        {
            image: lectue_2,
            title: "Advanced JavaScript",
            totalLessons: 9,
            duration: "8 weeks",
            learningOutcomes: [
                "Master closures and prototypes",
                "Understand async programming",
            ],
        },
        {
            image: lectue_3,
            title: "App Development",
            totalLessons: 10,
            duration: "18 weeks",
            learningOutcomes: [
                "Learn to build apps, games",
                "Project based learning",
            ],
        },
        {
            image: lectue_4,
            title: "Full Stack Web Development",
            totalLessons: "11-12",
            duration: "26 weeks",
            learningOutcomes: [
                "Master website development",
                "Implement best practices in web dev",
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
