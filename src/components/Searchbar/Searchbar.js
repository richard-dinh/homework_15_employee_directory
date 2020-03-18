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
      <legend className="col-form-label col-sm-2 pt-0">Filter</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label className="form-check-label" htmlFor="gridRadios1">
            Department
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" htmlFor="gridRadios2">
            Role
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  </form>
  )
}

export default Searchbar