export default function MainPage(props) {
    return (
        <>
            <h2 className="app-title">Quizzical</h2>
            <p className="app-description">Test your knowledge</p>
            <button 
                className="get-started-button"
                onClick={props.handleClick}
            >
                Start quiz
            </button>
        </>
    )
}