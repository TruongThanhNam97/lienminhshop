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
      <div>
        <div className="form_google" id="clicktobuy">
        </div>
        <form className="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSfw9cjsb9Pu7UfC0ZNn_liyaq97EvbxYM14R6AlDYm-e8X7gA/formResponse">
        <input className="info_user" type="text" name="entry.2110786252" placeholder="Họ và tên" />
          <input className="info_user" type="text" name="entry.967581075" placeholder="Số điện thoại xác nhận" />
          <input className="info_user" type="text" name="entry.630078810" placeholder="Mã tài khoản ví dụ (Acc #31745)" />
          <input className="btn btn-secondary" type="submit" ></input>
          <a href="/" className="btn btn-secondary back">
            <div className="fa fa-times" />
          </a>
        </form>
      </div>
    );
  }
}

export default FormBuy;