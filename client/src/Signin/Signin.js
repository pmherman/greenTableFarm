// import React, { Component } from 'react';
// import axios from 'axios';
// import API from "../../utils/API";



// // handleformsubmit method will do an api request to the backend to check if the user name and passoword match anything

// // handleformsubmit is called on click 


// export default class Signin extends Component {
//     constructor() {
//         super();

//         this.state= {
//             id: '',
//             email: '',
//             password: ''
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//       }
    
//       logUserIn = (e) => {
//         e.preventDefault();
    
//         axios.post({
//           email: this.state.email,
//           password: this.state.password
//         }).then(res => {
//             console.log("response: " + JSON.stringify(res));
//           this.setState({
//             logged_in: true,
//             user: res.data
//           });
//         });
//       }
    
//       registerUser = (e) => {
//         e.preventDefault();
    
//         axios.post('/register', {
//           email: this.state.email,
//           password: this.state.password
//         }).then(res => {
//           this.setState({
//             logged_in: true,
//             user: res.data
//           });
//         });
//       }
    
//       logoutUser = () => {
//         axios.get('/logout')
//           .then(res => {
//             this.setState({
//               logged_in: false,
//               user: {}
//             });
//           });
//       }
    
//     render() {
//         return (
//             <section id="signIn"> 
//                 <div className="container"> 
//                     <div className="row" id="signinHeader"> 
//                         <div className="text-center" lg={12}> 
//                             <h2 className="text-center text-secondary mb-0">Please Sign In</h2>
//                             <hr className="mb-5" />
//                         </div> 
//                     </div> 
//                     <div className="row"> 
//                     <div md={12}> 

//                         {/* Contact Form Start */}
//                         {/* update email in action https://formspree.io/your@email.com */}
//                         <form> 

//                             {/* User Name  */}
//                             <div className="row  control-group"> 
//                                 <div className="form-group" sm={12}> 
//                                     <input type="text" 
//                                     className="form-control" 
//                                     placeholder="Email" 
//                                     value={this.state.email} 
//                                     onChange={this.handleChange} 
//                                     name="email" 
//                                     id="userEmail" /> 
//                                 </div> 
//                             </div> 

//                             {/* User Password */}
//                             <div className="row control-group"> 
//                                 <div className="form-group" sm={12}> 
//                                     <input type="text" 
//                                     className="form-control" 
//                                     placeholder="Password" 
//                                     name="password" 
//                                     value={this.state.password} 
//                                     onChange={this.handleChange} 
//                                     id="password" /> 
//                                 </div> 
//                             </div> 

//                             {/* Submit Button */}
//                             <div className="row"> 
//                                 <div sm={12}> 
//                                     <button onClick={this.logUserIn} id="submitLogin" type="submit" className="btn btn-lg pull-right">Send</button> 
//                                 </div> 
//                             </div> 

//                         </form> {/* End Contact Form */}
//                     </div> {/* End md={8} offset-md-2 */}
//                     </div> {/* End row*/}
//                 </div> {/* End Container*/}
//                 <div className="push"></div>
//             </section>
//         )
//     }
// }
