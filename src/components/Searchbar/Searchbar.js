import React from 'react'
import './Searchbar.css'
const Searchbar = props => {
  return (
  <form>
    <div className="form-group row">
      <div class="input-group-prepend">
        <label htmlFor="search" className="col-sm-2 col-form-label">Search</label>
      </div>
      <div className="col-sm-10">
      <input onChange = {props.handleSearch}type="text" className="form-control" id="search" value={props.searchString}/>
    </div>
    </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" htmlFor="inputGroupSelect01">Filter By</label>
        </div>
        <select onChange = {props.handleFilter}class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="department" name = "department">Department</option>
          <option value="title" name = "title">Title</option>
        </select>
      </div>
      <button onClick = {props.handleButtonClick} className="btn btn-primary">Search</button>
      <button onClick = {props.handleReset} className="btn btn-primary buttonStyle">Reset</button>
  </form>
  )
}

export default Searchbar