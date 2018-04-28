import auth0 from "auth0-js";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "aidanclemente.auth0.com",
        clientID: "V63NeTI6F5Hcpj4WLD1Yg0kysITt4CF4",
        redirectUri: "https://localhost:3000/callback",
        audience: "https://aidanclemente.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"

    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

}
