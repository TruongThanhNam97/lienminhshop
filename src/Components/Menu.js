import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Menu extends Component {
    render() {
        return (
<div className="menu">
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top|fixed-bottom|sticky-top">
    <div className="container">
      <NavLink className="navbar-brand" to="/listaccounts">
        <img src="./images/logo.png" alt="for react" className="logo" />
      </NavLink>
      <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink activeClassName="xuat" className="nav-link xuat" to="/listaccounts">trang chủ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="xuat" className="nav-link" to="/ownershop">thông tin shop</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/"  id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">hướng dẫn</a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink activeClassName="xuat" className="dropdown-item" to="/conductbuyaccount">hướng dẫn mua acc</NavLink>
              <NavLink activeClassName="xuat" className="dropdown-item" to="/securityaccount">hướng dẫn bảo mật</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="xuat" className="nav-link" to="/checkskin">kiểm tra skin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="xuat" to="/login" className="btn btn-primary">Đăng nhập</NavLink>
          </li>
        </ul>
        </div>
    </div>
  </nav>
</div>
        );
    }
}

export default Menu;