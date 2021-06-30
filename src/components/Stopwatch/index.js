// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  onRestartBtn = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  onStopBtn = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds <= 9) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes <= 9) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="timer"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 testId="timer" className="stopwatch-timer">
              {time}
            </h1>
            <div className="timer-buttons">
              <button
                className="button start-button"
                type="button"
                onClick={this.onStartBtn}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.onStopBtn}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.onRestartBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
