import React, { Component } from 'react';

class ConductBuyAccount extends Component {
    render() {
        return (
<div className="section3 wow fadeInUp" data-wow-delay="0.8s">
  <div className="container">
    <div className="list_video">
      <div className="video">
        <h1>HƯỚNG DẪN MUA ACC BẰNG THẺ ĐIỆN THOẠI : </h1>
        <video src="./videos/vid1.mp4" controls width="100%"  />
      </div>
      <div className="video">
        <h1>HƯỚNG DẪN MUA BẰNG THẺ ATM - CHUYỂN KHOẢN </h1>
        <video src="./videos/vid2.mp4" controls width="100%"  />
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
          {/* <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                      <div class="card-body">
                          <p>Có 2 các đăng nhập : đăng nhập bằng Facebook và đăng nhập bằng google. ( chọn cách nào cũng được )</p>
                      </div>
                  </div> */}
        </div>
        {/* <div class="card">
                  <div class="card-header" role="tab" id="section2HeaderId">
                      <h5 class="mb-0">
                          <a data-toggle="collapse" data-parent="#step" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId" class="dropdown">
                              Bước 2 : NẠP TIỀN VÀO TÀI KHOẢN
                  </a>
                      </h5>
                  </div>
                  <div id="section2ContentId" class="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                      <div class="card-body">
                          <p>- Có 2 cách để nạp tiền vào Lienminhshop.vn</p>
                          <p>1 : Nạp Tiền Bằng Card : Xem hướng dẫn nạp <a href="" class="taiday"> tại đây</a></p>
                          <p>2: Nạp Tiền bằng atm : Xem hướng dẫn nạp <a href="" class="taiday">tại đây</a> </p>
                      </div>
                  </div> */}
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