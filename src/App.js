import React, {Component} from 'react'
  //data is requested after component mounted, this is why we use componentDidMount
  //when the data is received we store the received data
export default class App extends Component {
  constructor() {
    super()

    this.state = {
      people: []
    }
  }
  //data is requested after component mounted, this is why we use componentDidMount
  //when the data is received we store the received data
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(allPeople => {
        this.setState({
          people: allPeople.people
        })
      })
  }

  render() {
    return(
      <div>
        <h1>People will be displayed here:</h1>
        {this.state.people.map((people) => <li>{people.name}</li>)}
      </div>
    )
  }
}
