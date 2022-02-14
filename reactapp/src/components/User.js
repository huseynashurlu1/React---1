import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div className='col-12 mb-4'>
          <div className='card '>
               <div style={{cursor:"pointer"}} className='card-title  py-1 bg-secondary d-flex justify-content-between align-items-center'>
                   <h4 style={{color: "white",paddingLeft: "10px"}}>Username</h4>
                   <button className='btn btn-danger'>Delete</button>
               </div>
               <div className='card-body p-3'>
                    <ul>
                        <li>Salary: 3000 AZN</li>
                        <li>Department: IT</li>
                    </ul>
               </div>
          </div>
      </div>
    )
  }
}

export default User;