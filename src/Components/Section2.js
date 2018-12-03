import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Section2 extends Component {
    render() {
        return (
<div className="section2  wow fadeInUp" data-wow-delay="0.6s">
  <div className="container">
    <div className="bocsection2">
      <div className="row">
        <div className="col-md-8">
          <div className="boccol">
            <div className="row">
              <div className="col-12 text-center">
                <h1>tìm acc theo yêu cầu</h1>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-3">
                  <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Bạn cần tìm gì ?" />
                </div>
                <div className="col-md-3">
                  <select className="form-control" >
                    <option>Tìm theo rank</option>
                    <option>Chưa rank mùa nào</option>
                    <option>Chưa rank</option>
                    <option>Rank đồng</option>
                    <option>Rank bạc</option>
                    <option>Rank vàng</option>
                    <option>Rank bạch kim</option>
                    <option>Rank kim cương</option>
                    <option>Rank cao thủ</option>
                    <option>Rank thách đấu</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control" >
                    <option>Tìm theo khung</option>
                    <option>Chưa khung</option>
                    <option>Đồng</option>
                    <option>Bạc</option>
                    <option>Vàng</option>
                    <option>Bạch kim</option>
                    <option>Kim cương</option>
                    <option>Cao thủ</option>
                    <option>Thách đấu</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control" >
                    <option>Tìm theo tướng và IP</option>
                    <option>Nick full tướng</option>
                    <option>Nick nhiều tướng</option>
                    <option>Nick thừa nhiều IP</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control" >
                    <option>Tìm theo thông thạo</option>
                    <option>Nick nhiều thông thạo 7</option>
                    <option>Nick nhiều thông thạo 6</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control" >
                    <option>Tìm theo giá</option>
                    <option>Từ 10K đến 50K</option>
                    <option>Từ 50K đến 100K</option>
                    <option>Từ 100K đến 200K</option>
                    <option>Từ 200K đến 300K</option>
                    <option>Từ 300K đến 500K</option>
                    <option>Từ 500K đến 700K</option>
                    <option>Từ 700K đến 1 triệu</option>
                    <option>Nick vip trên 1 triệu</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập tên trang phục" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <a href="/" className="btn btn-success">
                    Tìm kiếm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boclink">
            <NavLink to="/question">
              <img src="./images/question.jpg" alt="question" />
            </NavLink>
            <NavLink to="/conductbuyaccount">
              <img src="./images/deposit.jpg" alt="deposit" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Section2;