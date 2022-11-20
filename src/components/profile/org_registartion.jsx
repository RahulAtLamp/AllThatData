import React from 'react'

function org_registartion() {
  return (
    <div>
         <div className='main-cont'>
    <div className='heading'>
      <h1>Profile</h1>
    </div>
  
  <div className="form1">
    {/* <div className="title">Welcome</div>
    <div className="subtitle">Let's create your account!</div> */}
    <div className="avt-img">
      <img className="avt-image"src="https://xsgames.co/randomusers/avatar.php?g=male"/>
      
    </div>
  <div className="input-c">
      <h1 className='subtitle'>Company Name :</h1>
      <h1 className='subtitle2'>XYZ Company</h1>

    </div>
    <div className="input-c">
      <h1 className='subtitle'>Description  :</h1>
      <h1 className='subtitle2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis odit illum voluptates ut cumque aliquid deserunt porro quae dolorem, voluptatibus corporis unde culpa id aspernatur laboriosam excepturi doloremque? Commodi!</h1>

    </div>
    <div className="input-c">
      <h1 className='subtitle'>Tagline :</h1>
      <h1 className='subtitle2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, in?</h1>

    </div>
  
    
    <button type="text" className="submit">submit</button>
  </div>
  </div>
      
    </div>
  )
}

export default org_registartion
