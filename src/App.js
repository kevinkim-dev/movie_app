import React from "react"


class App extends React.Component{
  state = {
    count: 3
  };
  add = () => {
    console.log('add')
    this.setState(current => ({
      count: current.count + 1
      // count: this.state.count + 1 -> not recommend
    }))
  };
  minus = () => {
    console.log('minus')
    this.setState(current => ({
      count: current.count - 1
      // count: this.state.count - 1 -> not recommend
    }))
  };
  render() {
    return <div>
      <h1>Number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
