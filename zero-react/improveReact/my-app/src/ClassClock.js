import React from 'react';

// 1
export default class ClassClock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // 3
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 4
  componentDidUpdate() {
    console.log(("componentDidUpdate"));
    console.log(this.state.date);
  }

  // 5
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  // 2
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}