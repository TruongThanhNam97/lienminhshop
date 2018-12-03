import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
<div className="section1">
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <div className="scroll wow fadeInUp" data-wow-delay="0.2s">
          <div className="giaodich">
            <p>khách hàng vừa giao dịch</p>
          </div>
          <div className="list">
            <div className="row">
              <div className="col-4">
                <p className="ten">Thanh Nam</p>
              </div>
              <div className="col-4 text-right">
                <p className="tenacc">LOL-Acc #23746</p>
              </div>
              <div className="col-4 text-right">
                <p className="gia">50.000 đ</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="ten">Phương Khanh</p>
              </div>
              <div className="col-4 text-right">
                <p className="tenacc">LOL-Acc #23747</p>
              </div>
              <div className="col-4 text-right">
                <p className="gia">100.000 đ</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="ten">Duy Khương</p>
              </div>
              <div className="col-4 text-right">
                <p className="tenacc">LOL-Acc #23748</p>
              </div>
              <div className="col-4 text-right">
                <p className="gia">150.000 đ</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="ten">Hoàng Phúc</p>
              </div>
              <div className="col-4 text-right">
                <p className="tenacc">LOL-Acc #23749</p>
              </div>
              <div className="col-4 text-right">
                <p className="gia">200.000 đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 wow fadeInUp" data-wow-delay="0.4s">
        <div id="slide" className="carousel slide" data-ride="carousel" data-interval={2000}>
          <ol className="carousel-indicators">
            <li data-target="#slide" data-slide-to={0} className="active" />
            <li data-target="#slide" data-slide-to={1} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="./images/1.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="./images/2.jpg" alt="Second slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Section1;