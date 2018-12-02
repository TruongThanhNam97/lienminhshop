import React, { Component } from 'react';

class FormBuy extends Component {
  componentWillMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "effect.js";
    head.appendChild(script);
}
    render() {
        return (
<div className="form_google" id="clicktobuy">
  <form className="form" id="mG61Hd" name="ahihi" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSeoZ-vPxiv9GDUKxAE5VWyFKvUlYIlJR1t0-P6PEQM0UP5HNg/formResponse">
    <input className="info_user form_control" type="text" name="entry.2003216109" placeholder="Họ và tên" />
    <input className="info_user" type="text" name="entry.385950496" placeholder="Số điện thoại xác nhận" />
    <input className="info_user" type="text" name="entry.1457515468" placeholder="Mã tài khoản ví dụ (Acc #31745)" />
    <input className="btn btn-secondary button_submit" type="submit" defaultValue="Submit" />
    <a href="/" className="btn btn-secondary back">
      <div className="fa fa-times" />
    </a>
  </form>
</div>
        );
    }
}

export default FormBuy;