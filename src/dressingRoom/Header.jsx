import React from 'react'

export default function Header() {
  return (
    <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="text-center" >
          <img src="./../assets/images/bg.jpg" alt="Card img" style={{width:300, height:150}}/>
        </div>
        <div className="card-body">
          <h4 className="card-title text-center text-primary">
            Virtual Dressing Room
          </h4>
        </div>
      </div>
      <hr />
    </div>
  </div>
  )
}
