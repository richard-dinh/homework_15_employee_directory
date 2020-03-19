import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
  <form>
    <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
    </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Filter By: </legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="department" value="option1" checked/>
          <label value = "department" className="form-check-label" htmlFor="gridRadios1">
            Department
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="title" value="option2"/>
          <label value = "title" className="form-check-label" htmlFor="gridRadios2">
            Title
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  </form>
  )
}

export default Searchbar