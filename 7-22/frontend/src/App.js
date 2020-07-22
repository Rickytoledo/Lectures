//Frontend
import React, { Component } from 'react';
import Axios from 'axios'

class App extends Component {

  state = {
    users:[]
  }

  componentDidMount(){
    Axios.get(`http://localhost:5000/album/302127`).then(res => {
      console.log(res.data) //{nicejob:true} 
    })
    this.getAllUsers()
  
  }

  login = async () => {
    let res = await Axios.get(`http://localhost:5000/profile`)
    //console.log(res)
  }

  handleChange = (e) => {
    
    this.setState({ [e.target.name]:e.target.value })

  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state)
    let res = await Axios.post(`http://localhost:5000/signup`,  this.state)
  }

  getAllUsers = async ( ) => {
    let res = await Axios.get(`http://localhost:5000/getUserData`)
    console.log(res)
    this.setState({
      users: res.data.users
    })
    //return <li>all users</li>
  }

  showAllUsers = () => {
    return this.state.users.map(eachUser=> {
      return <li>{eachUser.username} {eachUser.password}</li>
    })
  }

  render() {
    return (
      <div>

        {this.showAllUsers()}

        Frontend meets backend
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="username" type="text" />
          <input onChange={this.handleChange} name="password" type="password" />
          <button>signup</button>
        </form>
      </div>
    );
  }
}

export default App;