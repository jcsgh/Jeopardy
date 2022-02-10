const Question = (props) => {
    return (
      <div>
        <h2>Question:</h2>
        <p>{props.questionObject.question}</p>
      </div>
    )
  }

  export default Question;