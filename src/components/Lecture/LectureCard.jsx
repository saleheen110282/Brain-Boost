import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const LectureCard = ({
    image,
    title,
    className,
    totalLessons,
    duration,
    description,
    learningOutcomes,
}) => {
    const router = useNavigate();

    // Animation variants for the card
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
            />
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{className}</p>
                <div className="flex justify-between text-sm text-gray-600 my-2">
                    <span>{totalLessons} lessons</span>
                    <span>{duration}</span>
                </div>
                <p className="text-sm mb-4">{description}</p>
                <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes:</h4>
                    <ul className="list-disc list-inside text-sm">
                        {learningOutcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-4 bg-gray-50">
                <motion.button
                    onClick={() => {
                        router("/payment");
                    }}
                    className="primary-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Enroll Now
                </motion.button>
            </div>
        </motion.div>
    );
};

export default LectureCard;
