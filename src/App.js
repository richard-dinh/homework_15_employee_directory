import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Card from './components/Card'

class App extends Component {

  render(){

    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Searchbar />
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  {/* cards go here */}
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default App
