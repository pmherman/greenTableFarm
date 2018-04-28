import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
      <section id="signIn"> 
        <div className="container"> 
            <div className="row" id="signinHeader"> 
                <div className="text-center" lg={12}> 
                    <h2 className="text-center text-secondary mb-0">Please Sign In</h2>
                    <hr className="mb-5" />
                </div> 
            </div> 
            <div className="row"> 
              <div md={12}> 

                {/* Contact Form Start */}
                {/* update email in action https://formspree.io/your@email.com */}
                <form method="GET" action=""
                    name="signinForm" id="signinForm" novalidate=""> 

                    {/* User Name  */}
                    <div className="row  control-group"> 
                        <div className="form-group" sm={12}> 
                            <input type="text" className="form-control" placeholder="User Name" name="userName" id="userName" /> 
                        </div> 
                    </div> 

                    {/* User Password */}
                    <div className="row control-group"> 
                        <div className="form-group" sm={12}> 
                            <input type="text" className="form-control" placeholder="Password" name="password" id="password" /> 
                        </div> 
                    </div> 

                    {/* Submit Button */}
                    <div className="row"> 
                        <div sm={12}> 
                            <button id="submitLogin" type="submit" className="btn btn-lg pull-right">Send</button> 
                        </div> 
                    </div> 

                </form> {/* End Contact Form */}
              </div> {/* End md={8} offset-md-2 */}
            </div> {/* End row*/}
          </div> {/* End Container*/}
        <div className="push"></div>
      </section>
    )
  }
}
