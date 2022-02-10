import { Component } from "react";

class Score extends Component {
    state = {
        score: 0
    }

    handleIncrease = () => {
        this.setState({score: this.state.score + this.props.questionObject.value})
    }

    handleDecrease = () => {
        this.setState({score: this.state.score - this.props.questionObject.value})
    }

    render() {
        return(
            <div>
                <h2>Score: {this.state.score}</h2>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        )
    }
  }

  export default Score;