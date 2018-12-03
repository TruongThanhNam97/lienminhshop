import React, { Component } from 'react';

class OwnerShop extends Component {
    render() {
        return (
<div className="section3 wow fadeInUp" data-wow-delay="0.8s">
  <div className="container">
    <div className="list_owner">
      <div className="owner wow bounceInUp" data-wow-delay="0.3s">
        <img src="./lienminhshop/images/owner1.jpg" alt="for react" />
        <div className="manden" />
        <a href="https://www.facebook.com/truongthanhnam97" className="btn btn-info fb_owner"><div className="fa fa-facebook" /></a>
        <p className="owner_name">Trương Thanh Nam</p>
        <p className="owner_address">15520526</p>
      </div>
      <div className="owner wow bounceInUp" data-wow-delay="0.5s">
        <img src="./lienminhshop/imagess/owner2.jpg" alt="for react" />
        <div className="manden" />
        <a href="https://www.facebook.com/khanhlp315" className="btn btn-info fb_owner"><div className="fa fa-facebook" /></a>
        <p className="owner_name">Lê Phương Khanh</p>
        <p className="owner_address">15520350</p>
      </div>
      <div className="owner wow bounceInUp" data-wow-delay="0.7s">
        <img src="./lienminhshop/imagess/owner3.jpg" alt="for react" />
        <div className="manden" />
        <a href="https://www.facebook.com/dangxuanduykhuong" className="btn btn-info fb_owner"><div className="fa fa-facebook" /></a>
        <p className="owner_name">Đặng Xuân Duy Khương</p>
        <p className="owner_address">15520389</p>
      </div>
      <div className="owner wow bounceInUp" data-wow-delay="0.9s">
        <img src="./lienminhshop/imagess/owner4.jpg" alt="for react" />
        <div className="manden" />
        <a href="https://www.facebook.com/nguyenhoang.phuc.1213" className="btn btn-info fb_owner"><div className="fa fa-facebook" /></a>
        <p className="owner_name">Nguyễn Hoàng Phúc</p>
        <p className="owner_address">15520645</p>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default OwnerShop;