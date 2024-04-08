import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handleClick");
    console.log(this);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this);
  }

  render() {
    console.log("render");
    console.log(this);
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    )
  }
}

export default Toggle;