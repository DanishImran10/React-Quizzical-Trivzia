import { useState } from "react"
import MainPage from "./components/MainPage"
import QuizPage from "./components/QuizPage"

export default function App() {
    const [isMainPage, setIsMainPage] = useState(true)

    function handleStartQuiz() {
        setIsMainPage(false)
    }

    return (
        <div className="app--container">
            {isMainPage ? 

            <MainPage 
                handleClick={handleStartQuiz}
            /> : 

            <QuizPage />}
        </div>
    )
}