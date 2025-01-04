# Quiz App

A dynamic and interactive Quiz App built with React. Users can take quizzes with multiple-choice questions, see their results, and retake quizzes with new questions.

## Features
- **Dynamic Question Fetching**:
  - Fetches 10 new questions from an API each time a quiz starts.
  - API integration using `fetch`, promises, and `useEffect`.
- **Polished Data Handling**: Raw API data is refined and stored in a state variable for efficient use.
- **Question Navigation**: Displays one question at a time in a structured MCQ format.
- **Answer Submission**: Allows users to select answers and submit them to view the correct ones.
- **Retake Quiz**: Users can restart the quiz to get a new set of questions.
- **State Management**:
  - Tracks fetched questions, user-selected options, and quiz results.
  - Maintains a global state for seamless data flow between components.
- **Reusable Components**:
  - Hierarchical component structure with props for communication.
- **Dynamic CSS Styling**: Highlights selected answers and correct/incorrect responses.
- **Efficient Rendering**: Uses `.map()`, `.filter()`, and conditional rendering for dynamic UI updates.

## How It Works
1. Fetches 10 new questions from an API when the quiz starts or is reset.
2. Displays questions and multiple-choice options.
3. Tracks user-selected options in the state.
4. Submits answers to reveal correct ones with visual feedback.
5. Allows users to retake the quiz with a new set of questions.

## Technologies Used
- **React**:
  - Functional components
  - `useState` and `useEffect` for state and lifecycle management
  - Props for component communication
- **CSS**: Dynamic styling for visual feedback and responsiveness.
- **Global State Management**: Efficiently handles data across components.
- **Fetch API**: Retrieves quiz data dynamically.
- **Netlify**: Deployed for online access.

## Deployed Application
Check out the live version of the project here: [Quiz App](#)