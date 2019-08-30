import React, { Component } from 'react';
import User from './components/User';
import './App.css';

const config = {
  headers: {
    Authorization: 'Bearer UMbMtaQZUXjQTPYnFFdtXFcu_TAge23B2rVp'
  }
}

class App extends Component {
  state = {
    users: [],
    url: 'https://gorest.co.in/public-api/users',
    query: ''
  };

  serachText = (event) => {
    this.setState({
      query: event.target.value
    })
  }
  async getUsers() {

    try {
      const data = await fetch(this.state.url, config);
      const jsonData = await data.json();
      this.setState({
        users: jsonData.result
      })
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUsers()
  };
  render() {

    const gender = [];
    const name = [];
    const avatar = [];
    const phone = [];
    this.state.users.forEach(item => {
      name.push(item.first_name);
      gender.push(item.gender);
      avatar.push(item._links.avatar.href);
      phone.push(item.phone);
    });

    let newSearch = name.filter((users) => {
      return users.toLowerCase().indexOf(this.state.query) !== -1;
    })

    return (
      <div className="container">
        <div className="input-container">
          <label>search a user</label>
          <input type="text" onKeyUp={this.serachText} />
        </div>
        <div className="users-container">
          {
            newSearch.map((users, i) => {
              return <User gender={gender[i]} name={users} phone={phone[i]} avatar={avatar[i]} key={i} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
