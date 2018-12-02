import React, { Component } from 'react';

class Login extends Component {
  componentWillMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "effect.js";
    head.appendChild(script);
}
    render() {
        return (
<div className="section3 wow fadeInUp" data-wow-delay="0.8s">
  <div className="container">
    <div className="title_social_network wow fadeInUp" data-wow-delay="1s">
      <p>Đăng nhập nhanh bằng tài khoản mạng xã hội</p>
    </div>
    <div className="list_social_network">
      <a href="/" className="btn btn-secondary fb_social wow fadeInUp" data-wow-delay="1.1s">
        <div className="fa fa-facebook" />
        Đăng nhập bằng facebook
      </a>
      <a href="/" className="btn btn-secondary gg_social wow fadeInUp" data-wow-delay="1.2s">
        <div className="fa fa-google-plus" />
        Đăng nhập bằng Google
      </a>
    </div>
  </div>
</div>
        );
    }
}

export default Login;