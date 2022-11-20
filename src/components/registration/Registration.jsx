import React from 'react';
import './registration.scss';

// import BG from "../../images/bg.svg";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiMobileAlt } from "react-icons/bi";

function Registration() {
  return (
    <div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn mt-4">submit</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
   
    // <div className='main-cont'>
    
    // <div className="form">
    //   <div className="title">Welcome</div>
    //   <div className="subtitle">Let's create your account!</div>
    //   <div className="input-container ic1">
    //     <input id="firstname" className="input" type="text" placeholder=" " />
    //     <div className="cut"></div>
    //     <label for="firstname" className="placeholder">First name</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="lastname" className="input" type="text" placeholder=" " />
    //     <div className="cut"></div>
    //     <label for="lastname" className="placeholder">Last name</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="email" className="input" type="text" placeholder=" " />
    //     <div className="cut cut-short"></div>
    //     <label for="email" className="placeholder">Email</label>
    //   </div>
    //   <button type="text" className="submit">submit</button>
    // </div>
    // </div>

    

  )
}

export default Registration