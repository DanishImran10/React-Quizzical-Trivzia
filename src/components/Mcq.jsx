import Option from "./Option"
import { nanoid } from "nanoid"

export default function Mcq(props) {
    function createOptionObjects() {
        return props.options.map(option => ({
            id: nanoid(),
            text: option,
            isSelected: props.selected_answer === option ? true : false
        }))
    }

    function handleSelection(answer) {
        props.handleSelection(props.id, answer)
    }

    const options = createOptionObjects()

    const optionElements = options.map(option => 
        <Option 
            key={option.id} 
            text={option.text}
            id={option.id}
            isSelected={option.isSelected}
            handleSelection={handleSelection}
            quizMode={props.quizMode}
            correctOption={props.correctOption}
        />)
    
    return (
        <div className="mcq--container">
            <h3 className="mcq--question">{props.question}</h3>
            {optionElements}
            <hr className="mcq--separator" />
        </div>
    )
}