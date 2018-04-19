import React, { Component } from 'react'
import "./Footer.css";

 class Footer extends Component {
  render() {
    return (
        
  <footer class="page-footer text-center mt-4 wow fadeIn">

    {/*Call to action  */}
    <div class="pt-2">
      <p id="footerConnect">Connect With Us</p>
    </div>
    {/*/.Call to action  */}

    {/* Optional spacing */}
    {/* <div class="container">
      <hr class="my-2 mx-2"></hr>
    </div> */}
    
    {/* Social icons   */}
    <div class="icons">
    
      {/* Facebook Update href */}
      <a href="https://www.facebook.com/greentablefarm/" target="_blank">
        <i class="icon fa fa-facebook mr-3"></i>
      </a>

      {/*  Email Update href */}
      <a href="mailto:tjhoyt7@gmail.com" class="social-link rounded-circle text-white mr-3" target="_blank" data-toggle="tooltip" data-placement="top" title="Email" data-original-title="Email">
        <i class="icon fa fa-fw fa-envelope"></i>
      </a>

      {/* GitHub update href */}
      {/* <a href="" target="_blank">
        <i class="icon fa fa-github mr-3"></i>
      </a> */}

      {/* LinkedIn update href */}
      {/* <a class="social-link rounded-circle text-white mr-3" data-toggle="tooltip" data-placement="top" target="_blank" title="LinkedIn" href="">
        <i class="icon fa fa-linkedin" aria-hidden="true"></i>
      </a> */}

    </div>
    {/* Social icons   */}

    {/*Copyright  */}
    <div class="footer-copyright">
      <div class="container">
        <small>Powered by <i class="fa fa-coffee" aria-hidden="true"></i> and <i class="fa fa-heart" aria-hidden="true"></i> Copyright &copy; Aidan Clemente & Paul Herman 2018</small>
      </div>
    </div>
    {/*/.Copyright  */}

  </footer>

    )
  }
}

export default Footer;