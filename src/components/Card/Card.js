import React from 'react'
import './Card.css'
const Card = () => {
  return(
    <div className="card col-md-4">
      <img className="card-img-top" src="https://images.squarespace-cdn.com/content/v1/561bc82ce4b0fcd88cab31fd/1505951051649-JIT5OYL6STSFMSVAT490/ke17ZwdGBToddI8pDm48kBzd96Q5cD5DyEnBQqVFsdx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZonbp4IyLSeXtFyJPYv4LCur-pxl2bVoXeHkDCk8e460XfLCQDpnY7FxMb_ifd4GA/Professional-Headshots-Photography-Fort-Lauderdale-124.jpg?format=2500w" alt="employee"/>
      <div className="card-body">
        <h5 className="card-title">Employee Name</h5>
        <hr></hr>
        <p className="card-text">Employee Info</p>
      </div>
    </div>
  )
}

export default Card