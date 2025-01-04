import Mcq from "./Mcq"
import { useEffect, useState } from "react"
import { decode } from "html-entities"
import { nanoid } from "nanoid"

export default function QuizPage() {
    const [mcqsArray, setMcqsArray] = useState([])
    const [quizMode, setQuizMode] = useState(true)
    const [refreshApp, setRefreshApp] = useState(true)

    function createMcqObjects(data) {
        return data.results.map(mcq => {
            const optionsArray = mcq.incorrect_answers.map(inc_ans => decode(inc_ans))          //decode each incorrect option before pushing
            optionsArray.splice(Math.floor(Math.random() * 4), 0, decode(mcq.correct_answer))   //push correct option at random position

            return {
                ...mcq,
                id: nanoid(),
                question: decode(mcq.question),
                options: optionsArray,
                correct_answer: mcq.correct_answer,
                selected_answer: ""
            }
        })
    }

    function handleSelection(id, answer) {
        setMcqsArray(prevMcqsArray => prevMcqsArray.map(prevMcq => {
            return prevMcq.id === id ?
                {...prevMcq, selected_answer: answer} :
                prevMcq
        }))
    }

    function handleToggle() {
        setQuizMode(prevQuizMode => !prevQuizMode)  //can't do quizMode && setRefreshApp(true) here since changes haven't reflected yet
    }

    useEffect(() => {                               //using side effect so only runs when changes are reflected in quizMode
        quizMode && setRefreshApp(true)
    }, [quizMode])

    useEffect(() => {
        console.log("effect called", refreshApp)
        if (refreshApp)
        {
            fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res => res.json())
            .then(data => setMcqsArray(createMcqObjects(data)))
            setRefreshApp(false)
        }
    }, [refreshApp])

    const mcqsElements = mcqsArray.map(mcq => {     
        return (
            <Mcq
                key={mcq.id}
                question={mcq.question}
                options={mcq.options}
                id={mcq.id}
                selected_answer={mcq.selected_answer}
                handleSelection={handleSelection}
                quizMode={quizMode}
                correctOption={mcq.correct_answer}
            />
        )
    })

    return (
        <div className="quizpage--container">
            {mcqsElements}

            {!quizMode && 
                <h3 className="quizpage--result-statement">
                    You scored {mcqsArray.filter(mcq => mcq.selected_answer === mcq.correct_answer).length}/10 correct answers
                </h3>
            }

            <button
                className="quizpage--button"
                onClick={handleToggle}
            >
                {quizMode ? "Check Answers" : "Play Again"}
            </button>
        </div>
    )
}