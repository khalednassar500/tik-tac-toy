import react, {Component} from "react";

class Score extends Component {


  render() {
    return (
      <p className="text">
        Your Score: {this.props.numCorrect} / {this.props.numQuestions}
      </p>
    )
  }
}

export default Score;