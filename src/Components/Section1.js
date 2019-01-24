import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from "./User.json";

class Section1 extends Component {
  componentWillMount() {
    this.props.getUser(data);
  }
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
          {
            this.props.listUser.map((value,key)=>{
              return (
                <div className="row" key={key}>
                <div className="col-4">
                  <p className="ten">{value.ten}</p>
                </div>
                <div className="col-4 text-right">
                  <p className="tenacc">{value.tenAcc}</p>
                </div>
                <div className="col-4 text-right">
                  <p className="gia">{value.gia}</p>
                </div>
              </div>
              );
            })
          }
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
              <img src="/images/1.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="/images/2.jpg" alt="Second slide" />
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
const mapStateToProps = (state, ownProps) => ({
  listUser : state.listUser
})
const mapDispatchToProps = dispatch => {
  return {
    getUser : (data) => {
      dispatch({
        type : "getUser",data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section1)