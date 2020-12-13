import React from "react"
import "./reg.css";
function regi(){
    return(
      
             <div className="container">
        <div className="forms-container">

            <div className="signin-signup">


              
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign Up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" name="username" required pattern="[A-Za-z ]{5,}" title="Usernames must only contain  min 5  characters" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>

                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-mobile"></i>
                        <input type="text" placeholder="mobile no" required pattern="[0-9]{10}" title="contact must contain  10 degits" />
                    </div>
                
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="confpass" placeholder="confirm Password" required/>
                    <br/>
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                    <p className="social-text">Or Sign in with social platforms</p>

                
                    <div className="social-media">
                        <a href={{}} className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </form>
        


               </div>
        </div>
    </div>
       
        
    );
}

export default  regi;