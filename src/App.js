import Landingpage from './components/LandingPage';
import './App.sass';
import React from 'react';

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      hasComponentMounted: false,
      apiCalled: false,
      coinData: {},
      paginationValue: 1
    }
  }


  componentDidMount() {
    fetch("https://api.coincap.io/v2/assets")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            apiCalled: true,
            coinData: result
          });
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )




  }



  render(){
    return    <div className="App">
                <Landingpage coinData={this.state.coinData} paginationValue={this.state.paginationValue} />
              </div>
  }
}

