import React from 'react'
import './CreateOrganisation.scss'

function CreateOrganisation() {
  return (
    <div>
      <div className='main-cont'>
      <div className='heading'>
        <h1>Create Organisation</h1>
      </div>
    
    <div className="form">
      {/* <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div> */}
         <div className="input-container ic2">
        <input id="lastname" className="input" type="file" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Upload Company Logo</label>
      </div>
       <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Description</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Tagline</label>
      </div>
      <button type="text" className="submit">submit</button>
    </div>
    </div>
    </div>
  )
}

export default CreateOrganisation