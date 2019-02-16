import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from "./Ques.json";
import { NavLink } from "react-router-dom";


class Question extends Component {
  componentDidMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "./effect.js";
    head.appendChild(script);
    this.props.getQuestion(data);
  }
  render() {
    return (
      <div className="section3 wow fadeInUp" data-wow-delay="0.8s">
        <div className="container">
          <div className="phantrang_question mb-3">
            <a href="/" className="btn btn-secondary active_phantrang wow fadeInUp" data-wow-delay="1.2s" data-trang=".trang1">1</a>
            <a href="/" className="btn btn-secondary wow fadeInUp" data-wow-delay="1.4s" data-trang=".trang2">2</a>
          </div>
          <div className="question_space">
            <div className="list_question trang1 active_question">
              {
                this.props.listQuestion.map((value, key) => {
                  if (key <= 8) {
                    return (
                      <div className="question wow fadeInUp" key={key}>
                        <NavLink to="/conductbuyaccount" className="khung_hinh">
                          <img src={value.image} alt="for react" />
                        </NavLink>
                        <div className="question_content">
                        <NavLink to="/conductbuyaccount">{value.title}</NavLink>
                          <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
                          <br />
                          <span>{value.user} <b>|</b> {value.time}</span>
                        </div>
                      </div>
                    );
                  }
                  return true;
                })
              }
            </div>
            {/* End list_question */}
            <div className="list_question trang2">
              {
                this.props.listQuestion.map((value, key) => {
                  if (key >= 9) {
                    return (
                      <div className="question wow fadeInUp" key={key}>
                        <NavLink to="/conductbuyaccount" className="khung_hinh">
                          <img src={value.image} alt="for react" />
                        </NavLink>
                        <div className="question_content">
                          <NavLink to="/conductbuyaccount">{value.title}</NavLink>
                          <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
                          <br />
                          <span>{value.user} <b>|</b> {value.time}</span>
                        </div>
                      </div>
                    );
                  }
                  return true;
                })
              }
            </div>
            {/* End list_question */}
          </div>
          {/* End questtion_space */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  listQuestion: state.listQuestion
})
const mapDispatchToProps = dispatch => {
  return {
    getQuestion: (data) => {
      dispatch({
        type: "getQuestion", data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);