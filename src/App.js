// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => this.setState({data: data.people}))
      .catch(errors => console.log(errors.messages))
  }

  renderNames() {
    return this.state.data.map((obj, index) => <p key={index}>{obj.name}</p>)
  }

  render() {
    return(
      <div>
        {this.renderNames()}
      </div>
    )
  }
}
