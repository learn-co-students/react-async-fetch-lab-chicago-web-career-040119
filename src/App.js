// create your App component here
import React, { Component } from "react"

class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(({ people }) => this.setState({
      people: people }
    ))
  }

  peopleInSpace = () => {
    return this.state.people.map(people, id) => {
      return
        <h1 key={id}>
          {people.name}
        </h1>
      }
    )
  }


  render() {
    return (
      <div>
        {this.peopleInSpace()}
      </div>
    )
    }
  }

export default App
