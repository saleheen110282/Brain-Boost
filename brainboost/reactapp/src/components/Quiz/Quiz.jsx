import React, { useState } from 'react';
import './Quiz.css'; // Assuming your CSS is saved in this file

const QuizPage = () => {
  // State to hold the user's code input
  const [code, setCode] = useState('');

  // State to hold the current step (quiz/task index)
  const [currentStep, setCurrentStep] = useState(1);

  // Dummy data for steps (you can replace this with real content)
  const steps = [
    { id: 1, title: 'Quiz 1: Frontend Development', task: 'Develop a website using HTML and CSS' },
    { id: 2, title: 'Quiz 2: HTML Basics', task: 'Create an HTML page with a header, body, and footer.' },
    { id: 3, title: 'Quiz 3: CSS Fundamentals', task: 'Style your HTML page with CSS for layout and typography.' },
    // Add more steps as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send the `code` to an API or backend)
    console.log('Submitted Code:', code);
  };

  // Navigate to the previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Navigate to the next step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Get the current step's data
  const currentQuiz = steps.find((step) => step.id === currentStep);

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li><a href="#">Video 1: Introduction to Web Development</a></li>
          <li><a href="#">Quiz 1</a></li>
          <li><a href="#">Video 2: HTML Basics</a></li>
          <li><a href="#">Quiz 2</a></li>
          <li><a href="#">Video 3: CSS Fundamentals</a></li>
          <li><a href="#">Quiz 3</a></li>
          {/* Add more items as needed */}
        </ul>
      </aside>

      <main className="content">
        <h1>{currentQuiz.title}</h1>
        <div className="task">
          <h3>Task:</h3>
          <p>{currentQuiz.task}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            style={{ height: '200px', width: '100%', padding: '10px' }}
            placeholder="Your code goes here.."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handlePrevious} disabled={currentStep === 1}>
              Previous
            </button>
            <button type="button" onClick={handleNext} disabled={currentStep === steps.length}>
              Next
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default QuizPage;
