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
    filter: '',
    searchString: '',
  }

  handleFilter = event => {
    this.setState({filter: event.target.value.toLowerCase()})
  }

  handleSearch = event => {
    this.setState({searchString: event.target.value.toLowerCase()})
  }

  handleButtonClick = event => {
    event.preventDefault()
    let data2
    switch(this.state.filter){
      case 'department':
        //filter for only department matching what the searchString is
        data2 = data.filter( employee => {
          return employee.department.toLowerCase().match(this.state.searchString)
        })
        //taking the filter data and mapping it into a Card component
        this.setState({
          filter: '',
          searchString: '',
          employees: data2.map(employee => {
          return <Card
            first_name={employee.first_name}
            last_name={employee.last_name}
            department={employee.department}
            title={employee.title}
          />
          })
        })
        break
      case 'title':
        //filter for only title matching what the searchString is
        data2 = data.filter(employee => {
          return employee.title.toLowerCase().match(this.state.searchString)
        })
        //taking the filter data and mapping it into a Card component
        this.setState({
          filter: '',
          searchString: '',
          employees: data2.map(employee => {
            return <Card
              first_name={employee.first_name}
              last_name={employee.last_name}
              department={employee.department}
              title={employee.title}
            />
          })
        })
        break
      }
  }

  render(){
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Searchbar 
              filter = {this.state.filter}
              searchString = {this.state.searchString}
              handleFilter = {this.handleFilter}
              handleSearch = {this.handleSearch}
              handleButtonClick = {this.handleButtonClick}
              />
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
