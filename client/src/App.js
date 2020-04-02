import React, { Component } from 'react';

class App extends Component {

  state = {
    lists: []
  }
  
  componentDidMount() {
    // prod url on port 5000
    // fetch('/customers')  // /api/v1/transactions  // http://127.0.0.1:3000/customers
    fetch('/lists') 
    .then(res => res.json())
    .then((data) => {
      this.setState({ lists: data })
      console.log(this.state.lists)
      console.log('client call to server')
    })
    .catch(console.log)
  }

  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h2>The List Data</h2>
        {this.state.lists.map((list) => (
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">{list.thename}</h5>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;