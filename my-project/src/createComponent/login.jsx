import React from "react";
import "./login.css";

function login(){

    return(
       
             <div className="container">
        <div className="forms-container">

            <div className="signin-signup">


              
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" name="username" required pattern="[A-Za-z ]{5,}" title="Usernames must only contain  min 5  characters" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
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

export default login;