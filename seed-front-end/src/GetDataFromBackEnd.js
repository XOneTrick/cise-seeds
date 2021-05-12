// react table
// import { useTable } from 'react-table'
// Saving data
import { dataDB } from "./dataMongoDB.js";
// Getting data
import React, { Component } from 'react'
import axios from 'axios';
const API_URL = 'http://localhost:8082/seeds/article';
// var dbInstance;
// var state;
class GetDataFromBackEnd extends Component{
  // constructor(dbInstance)
  // {
  //   this.dbInstance = dbInstance;
  //   // dbInstance.title = "title";

  // }
  state = {
    rows: []
  }
//   dataInst = new dataMongoDB("testTitle");
  
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ rows: data })
      console.log(this.state.rows)
     })
  }
  // [...]
  
  render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>React Axios Example</h1>
        {this.state.rows.map((db) => (
          <div className="card">
           <div className="card-body">
               {/* <h5 className="card-title">{user.name}</h5> */}
               <h5 className="card-title">{db._id}</h5>
               <h5 className="card-title">{db.title}</h5>
               <p>SE methods = {db.semethod}</p>
              <h6 className="card-subtitle mb-2 text-muted">
              {/* {user.email}              */}
                {/* {dataDB.title = db.title} */}
                {dataDB.title.push(db.title)}
                {dataDB.author.push(db.author)}
                {dataDB.seMethods.push(db.semethod)}
                {/* {dataDB.title = push} */}
              </h6>
            </div>
          </div>
        ))}
        <h5 className="card-title">{this.state.rows.length}</h5>
        </div>
        {/* <div> */}
            
            {/* <dataMongoDB></dataMongoDB> */}
        {/* </div> */}
        {/* build the table */}
        <div>
          {/* <h1>dbInstance.title</h1> */}
        </div>
       </div>
       
       
    );
    }
}

// exports.getBackEndData = function() {
//   return state;
// };



export default GetDataFromBackEnd;