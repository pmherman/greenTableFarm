// import auth0 from "auth0-js";

// export default class Auth {
//     auth0 = new auth0.WebAuth({
//         domain: "aidanclemente.auth0.com",
//         clientID: "V63NeTI6F5Hcpj4WLD1Yg0kysITt4CF4",
//         redirectUri: "https://localhost:3000/callback",
//         audience: "https://aidanclemente.auth0.com/userinfo",
//         responseType: "token id_token",
//         scope: "openid"

//     });

//     constructor() {
//         this.login = this.login.bind(this);
<<<<<<< HEAD
//         // this.logout = this.logout.bind(this);
//         // this.handleAuthentication = this.handleAuthentication.bind(this);
//         // this.isAuthenticated = this.isAuthenticated.bind(this);
=======
>>>>>>> master
//     }

//     login() {
//         this.auth0.authorize();
//     }

<<<<<<< HEAD
//     // handleAuthentication() {
//     //     this.auth0.parseHash((err, authResult) => {
//     //       if (authResult && authResult.accessToken && authResult.idToken) {
//     //         this.setSession(authResult);
//     //         history.replace('/home');
//     //       } else if (err) {
//     //         history.replace('/home');
//     //         console.log(err);
//     //       }
//     //     });
//     //   }
    
//     //   setSession(authResult) {
//     //     // Set the time that the Access Token will expire at
//     //     let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
//     //     localStorage.setItem('access_token', authResult.accessToken);
//     //     localStorage.setItem('id_token', authResult.idToken);
//     //     localStorage.setItem('expires_at', expiresAt);
//     //     // navigate to the home route
//     //     history.replace('/home');
//     //   }
    
//     //   logout() {
//     //     // Clear Access Token and ID Token from local storage
//     //     localStorage.removeItem('access_token');
//     //     localStorage.removeItem('id_token');
//     //     localStorage.removeItem('expires_at');
//     //     // navigate to the home route
//     //     history.replace('/home');
//     //   }
    
//     //   isAuthenticated() {
//     //     // Check whether the current time is past the 
//     //     // Access Token's expiry time
//     //     let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//     //     return new Date().getTime() < expiresAt;
//     //   }

=======
>>>>>>> master
// }
