import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    question: null,
    category: null,
    answer: null
  }

  handleClick = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random")
      const data = await response.json()
      this.setState({
        question: data[0],
        category: data[0],
        answer: data[0]
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Jeopardy!</h1>
        </header>


        <button onClick={this.handleClick}>Get question</button>

        <h2>Question:</h2>
        <div className='question'>
          {this.state.question && <RandomQuestion randomQuestion={this.state.question} />}
        </div>
        <h2>Category:</h2>
        <div className='category'>
          {this.state.category && <Category category={this.state.category} />}
        </div>
        <h2>Answer:</h2>
        <div className='answer'>
          {this.state.answer && <Answer answer={this.state.answer} />}
        </div>

      </div>
    );
  }

}

const RandomQuestion = (props) => {
  const { randomQuestion } = props
  console.log(randomQuestion)
  return (
    <div className="question">
      <p>{randomQuestion.question}</p>
    </div>
  )
}

const Category = (props) => {
  const { category } = props
  return (
    <div className="category">
      <p>{category.title}</p>
    </div>
  )
}

const Answer = (props) => {
  const { answer } = props
  return (
    <div className="answer">
      <p>{answer.answer}</p>
    </div>
  )
}



export default App;
