// create your App component here
import React, { Component } from 'react';



//no need to modify anything in this component
class App extends Component {

state = {
    peopleInSpace: []
  }

render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => <p> {person.name} is on craft, {person.craft} </p> )}
      </div>
    )
  }


componentDidMount(){
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({
      peopleInSpace: data.people
    })
  })
}

}

export default App
