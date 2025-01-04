export default function Option(props) {
    function classSelector() {
        if (props.quizMode)
            return props.isSelected ? "option--selected" : "option--button"
        else
        {
            if (props.isSelected)
            {
                if (props.text === props.correctOption)
                    return "correct-option"
                else
                    return "incorrect-selection"
            }
            else
            {
                if (props.text === props.correctOption)
                    return "correct-option"
                else
                    return "option--not-selected"
            }
                
        }
    }


    return ( 
        <button 
            className={classSelector()}
            onClick={() => {
                if (props.quizMode)
                    props.handleSelection(props.text)}
            }
        >
            {props.text}
        </button>
    )
}