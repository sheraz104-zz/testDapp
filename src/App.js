import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from './web3';
import contractInstance from './contracts/contractInstance';

class App extends Component {

   constructor(props){
     super(props);
     this.state = {
       firstName: '',
       lastName: '',
       transactionStatus:'transaction status'
     }

     this.accounts;
   }

   async componentDidMount(){
     this.accounts =await web3.eth.getAccounts();
     console.log(this.accounts)
     const result = await contractInstance.methods.firstName().call();
     console.log(result, "====")
   }

   handleFirstName = (e) => {
     this.setState({firstName: e.target.value});
   }

   handleLastName = (e) => {
    this.setState({lastName: e.target.value});
  }
   
   onSubmit = async (e) => {
    e.preventDefault();
    contractInstance.methods.setData(this.state.firstName, this.state.lastName).send({
     from:this.accounts[0]
   }).once('transactionHash', hash => { console.log(hash, "haaash");
   this.setState({transactionStatus:`Transaction has been submitted with hash ${hash}`})
  } 
  )
   .on('error', error => { } )
   .then( receipt => { console.log("receipttt", receipt)
   this.setState({transactionStatus:'Transaction has been mined'})

  });

   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dapp</h1>
        </header>
        <form style={{'margin':'10px', 'padding':'10px'}} onSubmit={this.onSubmit}>
          <div style={{'margin':'10px', 'padding':'10px'}}>
            <label>First Name</label>
            <input style={{'margin':'10px'}} type="text" value={this.state.firstName} onChange={this.handleFirstName} />
          </div>
          <div style={{'margin':'10px', 'padding':'10px'}}>
          <label>Last Name</label>
            <input style={{'margin':'10px'}} type="text" value={this.state.lastName} onChange={this.handleLastName} />
          </div>
          <input type="submit" value="submit" />
        </form>

        <div style={{'margin':'10px', 'padding':'10px'}}>
           <p>{this.state.transactionStatus}</p>
        </div>
      </div>
    );
  }
}

export default App;
