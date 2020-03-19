import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Card from './components/Card'
import data from '../src/components/data/data.json'
class App extends Component {

  state = {
    employees: data.map(employee => {
      return <Card
        first_name={employee.first_name}
        last_name={employee.last_name}
        department={employee.department}
        title={employee.title}
      />
    }),
    search: ''
  }

  handleFilter = () => {
    
  }
  render(){
    //filtering the json data for what the user wanted to search by
    let data2 = data.filter(employee => {
      return employee.department.toLowerCase().match('engineering')
    })
    console.log('search')
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
                  {this.state.employees}
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
