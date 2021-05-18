import React from 'react';
import './App.css';
import BasicTable from "./BasicTable.js";
// import { dataDB } from "./dataMongoDB.js";
import GetDataFromBackEnd from "./GetDataFromBackEnd.js";
// import SortingTable from './SortingTable.js';

function App()
{
  // var dbInstance = new dataMongoDB().da;
  // dbInstance.
  // dataDB.title = "test";
  return (
    <div>
      <h1>SEED's</h1>
      <BasicTable></BasicTable>
      <GetDataFromBackEnd></GetDataFromBackEnd>
      {/* <h1>{dataDB.title}</h1> */}
    </div>
  );
}

export default App;
// import React, { Component } from 'react';//working test
// import axios from 'axios';//working test

// const API_URL = 'http://localhost:8082/seeds/article';//working test
// tutorial link = https://www.techiediaries.com/react-axios/
// start of working test
// class App extends Component{
//   state = {
//     rows: []
//   }
//   componentDidMount() {
//     const url = `${API_URL}`;
//     axios.get(url).then(response => response.data)
//     .then((data) => {
//       this.setState({ rows: data })
//       console.log(this.state.rows)
//      })
//   }
//   // [...]
//   render() {

//     return (
//        <div className="container">
//         <div className="col-xs-8">
//         <h1>React Axios Example</h1>
//         {this.state.rows.map((db) => (
//           <div className="card">
//            <div className="card-body">
//                {/* <h5 className="card-title">{user.name}</h5> */}
//                <h5 className="card-title">{db._id}</h5>
//                <h5 className="card-title">{db.title}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">
//               {/* {user.email}              */}
//               </h6>
//             </div>
//           </div>
//         ))}
//         <h5 className="card-title">{this.state.rows.length}</h5>
//         </div>
//        </div>
//     );
//   }
// }

// export default App;
// end of working test 
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