import React, { Component } from 'react';

class ConductBuyAccount extends Component {
    render() {
        return (
<div className="section3 wow fadeInUp" data-wow-delay="0.8s">
  <div className="container">
    <div className="list_video">
      <div className="video">
        <h1>HƯỚNG DẪN MUA ACC BẰNG THẺ ĐIỆN THOẠI : </h1>
        <video src="./lienminhshop/videos/vid1.mp4" controls width="100%"  />
      </div>
      <div className="video">
        <h1>HƯỚNG DẪN MUA BẰNG THẺ ATM - CHUYỂN KHOẢN </h1>
        <video src="./lienminhshop/videos/vid2.mp4" controls width="100%"  />
      </div>
    </div>
    <div className="list_step">
      <div id="step" role="tablist" aria-multiselectable="true">
        <div className="card">
          <div className="card-header" role="tab" id="section1HeaderId">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#step" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId" className="dropdown">
                Bước 1 : Chọn tài khoản
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" role="tab" id="section3HeaderId">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#step" href="#section3ContentId" aria-expanded="true" aria-controls="section3ContentId" className="dropdown">
              BƯỚC 2 : Bấm mua ngay
            </a>
          </h5>
        </div>
        <div id="section3ContentId" className="collapse in" role="tabpanel" aria-labelledby="section3HeaderId">
          <div className="card-body">
            Nhập card và số điện thoại hoặc email
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default ConductBuyAccount;