import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Data from "./Data.json";
import { connect } from 'react-redux';


class Section2 extends Component {
  constructor(props) {
    super(props)
    this.state= {
      searchRank : null,
      searchKhung : null,
      searchChamp : null,
      searchThongThao : null,
      searchPrice : null
   }
  }
  search=()=>{
    var data = [];
    if (this.state.searchRank)
    {
      Data.forEach(item=>{
        if (item.searchRank===this.state.searchRank)
        {
          data.push(item);
        }
      })
      this.props.searchData(data);
      this.setState({
        searchRank : null
      })
    }
    else if (this.state.searchKhung)
    {
      Data.forEach(item=>{
        if (item.searchKhung===this.state.searchKhung)
        {
          data.push(item);
        }
      })
      this.props.searchData(data);
      this.setState({
        searchKhung : null
      })
    }
    else if (this.state.searchChamp)
    {
      Data.forEach(item=>{
        if (item.searchChamp===this.state.searchChamp)
        {
          data.push(item);
        }
      })
      this.props.searchData(data);
      this.setState({
        searchChamp : null
      })
    }
    else if (this.state.searchThongThao)
    {
      Data.forEach(item=>{
        if (item.searchThongThao===this.state.searchThongThao)
        {
          data.push(item);
        }
      })
      this.props.searchData(data);
      this.setState({
        searchThongThao : null
      })
    }
    else if (this.state.searchPrice)
    {
      Data.forEach(item=>{
        if (item.searchPrice===this.state.searchPrice)
        {
          data.push(item);
        }
      })
      this.props.searchData(data);
      this.setState({
        searchPrice : null
      })
    }
  }
  isChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    if (name==="searchRank")
    {
      this.setState({
        searchKhung : null,
        searchChamp : null,
        searchThongThao : null,
        searchPrice : null
      })    
    }
    else if (name === "searchKhung")
    {
      this.setState({
        searchRank : null,
        searchChamp : null,
        searchThongThao : null,
        searchPrice : null
      })
    }
    else if (name === "searchChamp")
    {
      this.setState({
        searchRank : null,
        searchKhung : null,
        searchThongThao : null,
        searchPrice : null
      })
    }
    else if (name ==="searchThongThao")
    {
      this.setState({
        searchRank : null,
        searchKhung : null,
        searchChamp : null,
        searchPrice : null
      })
    }
    else if ( name === "searchPrice")
    {
      this.setState({
        searchRank : null,
        searchKhung : null,
        searchChamp : null,
        searchThongThao : null
      })
    }
    this.setState({
      [name] :value
    })
  }
  displayAll=()=>{
    var data = [];
    Data.forEach(item=>{
      data.push(item);
    })
    this.props.searchData(data);
  }   
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
                  <select name="searchRank" onChange={(event)=>this.isChange(event)} className="form-control" >
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
                  <select name="searchKhung" onChange={(event)=>this.isChange(event)} className="form-control" >
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
                  <select name="searchChamp" onChange={(event)=>this.isChange(event)} className="form-control" >
                    <option>Tìm theo tướng và IP</option>
                    <option>Nick full tướng</option>
                    <option>Nick nhiều tướng</option>
                    <option>Nick thừa nhiều IP</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select name="searchThongThao" onChange={(event)=>this.isChange(event)} className="form-control" >
                    <option>Tìm theo thông thạo</option>
                    <option>Nick nhiều thông thạo 7</option>
                    <option>Nick nhiều thông thạo 6</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select name="searchPrice" onChange={(event)=>this.isChange(event)} className="form-control" >
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
              </div>
              <div className="row">
                <div className="col-12">
                  <div onClick={()=>this.search()} className="btn btn-success">
                    Tìm kiếm
                  </div>
                  <div onClick={()=>this.displayAll()} className="btn btn-success ml-3">
                    Hiển thị tất cả
                  </div>
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
const mapStateToProps = (state, ownProps) => ({
  
})
const mapDispatchToProps = dispatch => {
  return {
    searchData : (data) => {
      dispatch({
        type : "searchData",data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section2);