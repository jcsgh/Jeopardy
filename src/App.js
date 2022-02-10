import { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Category from './components/Category';
import Points from './components/Points'

class App extends Component {

  state = {
    questionObject: null
  }

  handleClick = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random")
      const data = await response.json()
      console.dir(data)
      this.setState({
        questionObject: data[0],
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>

        <h1>Welcome to Jeopardy!</h1>

        <button onClick={this.handleClick}>Get question</button>

        <div>
          {this.state.questionObject && <Question questionObject={this.state.questionObject} />}
          {this.state.questionObject && <Category questionObject={this.state.questionObject} />}
          {this.state.questionObject && <Points questionObject={this.state.questionObject} />}
        </div>

      </div>
    );
  }

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
