import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Data from "./Data.json";
import { connect } from 'react-redux';





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
    script.src = "./";
    head.appendChild(script);
    this.props.getData(Data);
  }
  componentWillReceiveProps(nextProps) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "./";
    head.appendChild(script);
  }
  toSlug = (str) => {
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
          <div className="top">
            <ul>
              <li className="appear">
                <div className="row father_account">
                  {
                    this.props.listData.map((value, key) => {
                      if (key <= 11) {
                        return (
                          <div className={"col-md-3 child_account"} key={key}>
                            <div className="account">
                              <div className="before">
                                <img src={value.imageBefore} alt="for react" />
                              </div>
                              <div className="after">
                                <div className="phantren">
                                  <div className="id_acc">
                                    <p>{value.id}</p>
                                  </div>
                                  <a href="/" className="hinhminhhoa" data-phanloaihinh={".hinhminhhoa" + (key + 1)}>
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
                                      <NavLink to={"/seedetail/" + this.toSlug(value.khung) + "." + value.id + ".html"} className="btn btn-danger chitiet">
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
              <li>
                <div className="row father_account">
                  {
                    this.props.listData.map((value, key) => {
                      if (key >= 12) {
                        return (
                          <div className={"col-md-3 child_account"} key={key}>
                            <div className="account">
                              <div className="before">
                                <img src={value.imageBefore} alt="for react" />
                              </div>
                              <div className="after">
                                <div className="phantren">
                                  <div className="id_acc">
                                    <p>{value.id}</p>
                                  </div>
                                  <a href="/" className="hinhminhhoa" data-phanloaihinh={".hinhminhhoa" + (key + 1)}>
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
                                      <NavLink to={"/seedetail/" + this.toSlug(value.khung) + "." + value.id + ".html"} className="btn btn-danger chitiet">
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
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  listData: state.listData
})
const mapDispatchToProps = dispatch => {
  return {
    getData: (data) => {
      dispatch({
        type: "getData", data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAccounts);