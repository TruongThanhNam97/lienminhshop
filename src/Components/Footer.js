import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
<div className="footer wow fadeInUp">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p>Địa chỉ: 155c Phan Huy Ích Gò Vấp</p>
        <p>© 2018, Copyright by Bán Acc Liên Minh Huyền Thoại Giá Rẻ - Uy Tín.</p>
        <div className="hotline">
          <div className="row">
            <div className="col-6">
              <div className="phone">
                <img src="./images/phone.png" alt="for react" />
                <div className="khoitext">
                  <h3>Hotline: 0943802073</h3>
                  <h3>Trương Thanh Nam</h3>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="time">
                <p>Thời gian làm việc : <span>8h-23h</span> các ngày trong tuần</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="socialnetwork">
          <a href="https://www.facebook.com/truongthanhnam97" className="fb">
            <div className="fa fa-facebook-f" />                  
          </a>
          <a href="https://www.facebook.com/truongthanhnam97" className="gg">
            <div className="fa fa-google-plus" />
          </a>
          <a href="https://www.facebook.com/truongthanhnam97" className="tw">
            <div className="fa fa-twitter" />
          </a>
          <a href="https://www.facebook.com/truongthanhnam97" className="yt">
            <div className="fa fa-youtube" />
          </a>
          <a href="https://www.facebook.com/truongthanhnam97" className="pr">
            <div className="fa fa-pinterest" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Footer;