import React from 'react'
import './profile.scss'

function Profile() {
  return (
   
    <div className='main-cont'>
      <div className='heading'>
        <h1>Profile</h1>
      </div>
    
    <div className="form">
      {/* <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div> */}
      <div className="input-container ic1">
        <h1 className='subtitle'>Company Name</h1>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <button type="text" className="submit">submit</button>
    </div>
    </div>
    
   

	
  )
}

export default Profile