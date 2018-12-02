import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Data from "./Data.json";




class ListAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    }
  }
  componentWillMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "effect.js";
    head.appendChild(script);
  }
  toSlug=(str)=>{
     // Chuyển hết sang chữ thường
     str = str.toLowerCase();     
 
     // xóa dấu
     str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
     str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
     str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
     str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
     str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
     str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
     str = str.replace(/(đ)/g, 'd');
  
     // Xóa ký tự đặc biệt
     str = str.replace(/([^0-9a-z-\s])/g, '');
  
     // Xóa khoảng trắng thay bằng ký tự -
     str = str.replace(/(\s+)/g, '-');
  
     // xóa phần dự - ở đầu
     str = str.replace(/^-+/g, '');
  
     // xóa phần dư - ở cuối
     str = str.replace(/-+$/g, '');
  
     // return
     return str;
  }
  render() {
    return (
      <div className="section3 wow fadeInUp">
        <div className="container">
          <div className="loctheorank mb-4">
            <a href="/" className="btn btn-danger wow fadeInUp active_locrank" data-wow-delay="0.5s" data-locrank="*">Tất cả</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="0.7s" data-locrank=".td">Thách đấu</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="0.9s" data-locrank=".ct">Cao thủ</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="1.1s" data-locrank=".kc">Kim cương</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="1.3s" data-locrank=".bk">Bạch kim</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="1.5s" data-locrank=".vang">Vàng</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="1.7s" data-locrank=".bac">Bạc</a>
            <a href="/" className="btn btn-danger wow fadeInUp" data-wow-delay="1.9s" data-locrank=".dong">Đồng</a>
          </div>
          <div className="top">
            <ul>
              <li className="appear">
                <div className="row father_account">
                {
                  this.state.data.map((value,key)=>{
                    if (key <=11)
                    {
                      var rank = "";
                      if (key===1)
                      {
                        rank = "td";
                      }
                      if (key===2)
                      {
                        rank = "td";
                      }
                      if (key===3)
                      {
                        rank = "td";
                      }
                      if (key===4)
                      {
                        rank = "ct";
                      }
                      if (key===5)
                      {
                        rank = "ct";
                      }
                      if (key===6)
                      {
                        rank = "bac";
                      }
                      if (key===7)
                      {
                        rank = "bk";
                      }
                      if (key===8)
                      {
                        rank = "dong";
                      }
                      if (key===9)
                      {
                        rank = "dong";
                      }
                      if (key===10)
                      {
                        rank = "vang";
                      }
                      if (key===11)
                      {
                        rank = "kc";
                      }
                      return (
                        <div className={"col-md-3 child_account "+rank} key={key}>
                        <div className="account wow fadeInUp" data-wow-delay="0.3s">
                          <div className="before">
                            <img src={value.imageBefore} alt="for react" />
                          </div>
                          <div className="after">
                            <div className="phantren">
                              <div className="id_acc">
                                <p>{value.id}</p>
                              </div>
                              <a href="/" className="hinhminhhoa" data-phanloaihinh=".hinhminhhoa1">
                                <img src={value.imageAfter} alt="for react" />
                              </a>
                            </div>
                            <div className="phangiua">
                              <p>{value.khung}</p>
                              <p>{value.rank}</p>
                              <p>{value.champ}</p>
                              <p >{value.skin}</p>
                            </div>
                            <div className="phanduoi">
                              <div className="row">
                                <div className="col-6">
                                  <p>{value.card}</p>
                                </div>
                                <div className="col-6">
                                  <p>{value.atm}</p>
                                </div>
                                <div className="col-6">
                                  <NavLink to={"/seedetail/"+this.toSlug(value.khung)+"."+value.id+".html"} className="btn btn-danger chitiet">
                                    Chi tiết
                                  </NavLink>
                                </div>
                                <div  className="col-6">
                                  <a   href="/" className="btn btn-danger muangay">
                                    Mua ngay
                                </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      ); 
                    }
                    return true;
                  })
                }  
                </div>
                {/* End row */}
              </li>
              {/* End li */}
              <li>
                <div className="row father_account">
                {
                  this.state.data.map((value,key)=>{
                    if (key >=12)
                    {
                      var rank = "";
                      if (key===12)
                      {
                        rank = "td";
                      }
                      if (key===13)
                      {
                        rank = "ct";
                      }
                      if (key===14)
                      {
                        rank = "ct";
                      }
                      if (key===15)
                      {
                        rank = "dong";
                      }
                      if (key===16)
                      {
                        rank = "dong";
                      }
                      if (key===17)
                      {
                        rank = "bac";
                      }
                      if (key===18)
                      {
                        rank = "bk";
                      }
                      if (key===19)
                      {
                        rank = "bk";
                      }
                      if (key===20)
                      {
                        rank = "dong";
                      }
                      if (key===21)
                      {
                        rank = "vang";
                      }
                      if (key===22)
                      {
                        rank = "kc";
                      }
                      if (key===23)
                      {
                        rank = "kc";
                      }
                      return (
                        <div className={"col-md-3 child_account "+rank} key={key}>
                        <div className="account wow fadeInUp" data-wow-delay="0.3s">
                          <div className="before">
                            <img src={value.imageBefore} alt="for react" />
                          </div>
                          <div className="after">
                            <div className="phantren">
                              <div className="id_acc">
                                <p>{value.id}</p>
                              </div>
                              <a href="/" className="hinhminhhoa" data-phanloaihinh=".hinhminhhoa1">
                                <img src={value.imageAfter} alt="for react" />
                              </a>
                            </div>
                            <div className="phangiua">
                              <p>{value.khung}</p>
                              <p>{value.rank}</p>
                              <p>{value.champ}</p>
                              <p>{value.skin}</p>
                            </div>
                            <div className="phanduoi">
                              <div className="row">
                                <div className="col-6">
                                  <p>{value.card}</p>
                                </div>
                                <div className="col-6">
                                  <p>{value.atm}</p>
                                </div>
                                <div className="col-6">
                                  <NavLink to={"/seedetail/"+this.toSlug(value.khung)+"."+value.id+".html"} className="btn btn-danger chitiet">
                                    Chi tiết
                                </NavLink>
                                </div>
                                <div className="col-6">
                                  <a href="/" className="btn btn-danger muangay">
                                    Mua ngay
                            </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      ); 
                    }
                    return true;
                  })
                } 
                </div>
                {/* End row */}
              </li>
              {/* End li */}
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li className="point">
                <a href="/listaccounts" className="btn btn-info">1</a>
              </li>
              <li>
                <a href="/listaccounts" className="btn btn-info">2</a>
              </li>
            </ul>
          </div>
          <div className="comment_fb">
            <div className="fb-comments" data-href="https://truongthanhnam97.github.io/lienminhshop" data-width={1110} data-numposts={100} colorscheme="dark" data-colorscheme="dark" data-order-by="reverse_time" />
          </div>
        </div>
      </div>
    );
  }
}

export default ListAccounts;