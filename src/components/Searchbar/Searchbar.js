import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
  <form>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="department">Filter by Department</label>
        <input type="text" className="form-control" id="department"/>
      </div>
      <div className="form-group col-md-6">
        <label for="title">Filter by Title</label>
        <input type="title" className="form-control" id="title"/>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Search</button>
  </form>
  )
}

export default Searchbar