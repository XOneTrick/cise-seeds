import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import BasicTable from "./BasicTable.js";
// import SortingTable from './SortingTable.js';
const API_URL = 'http://localhost:8082/seeds/article';
// tutorial link = https://www.techiediaries.com/react-axios/

class App extends Component{
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }
  // [...]
  render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>React Axios Example</h1>
        {this.state.users.map((user) => (
          <div className="card">
           <div className="card-body">
               {/* <h5 className="card-title">{user.name}</h5> */}
               <h5 className="card-title">{user._id}</h5>
               <h5 className="card-title">{user.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {user.email}             
              </h6>
            </div>
          </div>
        ))}
        <h5 className="card-title">{this.state.users.length}</h5>
        </div>
       </div>
    );
  }
  
  // return (
  //   <div>
  //     <BasicTable></BasicTable>
  //     <SortingTable></SortingTable>
  //     componentDidMount () {
  //       axios.get("http://localhost:8082/seeds/article").then(response => {
  //       console.log(response);
  //       })
  //     }
  //     {/* componentDidMount() {
  //   // console.log("Print id: " + this.props.match.params.id);
  //   axios
  //     .get('http://localhost:8082/seeds/article/'+this.props.match.params.id)
  //     .then(res => {
  //       // this.setState({...this.state, book: res.data})
  //       this.setState({
  //         title: res.data.title,
  //         isbn: res.data.isbn,
  //         author: res.data.author,
  //         description: res.data.description,
  //         published_date: res.data.published_date,
  //         publisher: res.data.publisher
  //       })
  //     })
  //     .catch(err => {
  //       console.log("Error from UpdateBookInfo");
  //     })
  // }; */}

  //   </div>
  // );
}

export default App;
