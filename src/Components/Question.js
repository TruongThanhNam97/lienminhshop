import React, { Component } from 'react';

class Question extends Component {
  componentWillMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "/lienminhshop/effect.js";
    head.appendChild(script);
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
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q1.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">HƯỚNG DẪN TẠO SHOP ĐỂ BÁN ACC LMHT - LIÊN QUÂN</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q2.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CÁCH CHUYỂN TIỀN ATM NHANH NHẤT , CON NÍT CŨNG LÀM ĐƯỢC.</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q3.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">LIENMINHSHOP.VN CÓ UY TÍN KHÔNG ???????</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q4.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">TÔI MUỐN NẠP TIỀN BẰNG CARD THÌ LÀM NHƯ THẾ NÀO ???</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q5.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">TÔI MUỐN NẠP TIỀN BẰNG ATM THÌ LÀM NHƯ THẾ NÀO ???</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q6.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">HƯỚNG DẪN ĐẶT CỌC TÀI KHOẢN</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q7.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CHÍNH SÁCH ĐỀN BÙ VÀ ĐẢM BẢO KHI MUA ACC Ở LIENMINHSHOP.VN ???</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q8.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">MUA XONG TÔI NHẬN TÀI KHOẢN VÀ MẬT KHẨU Ở ĐÂU</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q9.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CHO THUÊ ACC BATTLEGROUNDS</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
      </div>
      {/* End list_question */}
      <div className="list_question trang2">
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q10.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">HƯỚNG DẪN TẠO SHOP ĐỂ BÁN ACC LMHT - LIÊN QUÂN</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q11.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CÁCH CHUYỂN TIỀN ATM NHANH NHẤT , CON NÍT CŨNG LÀM ĐƯỢC.</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q12.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">LIENMINHSHOP.VN CÓ UY TÍN KHÔNG ???????</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q10.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">HƯỚNG DẪN TẠO SHOP ĐỂ BÁN ACC LMHT - LIÊN QUÂN</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q11.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CÁCH CHUYỂN TIỀN ATM NHANH NHẤT , CON NÍT CŨNG LÀM ĐƯỢC.</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q12.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">LIENMINHSHOP.VN CÓ UY TÍN KHÔNG ???????</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q10.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">HƯỚNG DẪN TẠO SHOP ĐỂ BÁN ACC LMHT - LIÊN QUÂN</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q11.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">CÁCH CHUYỂN TIỀN ATM NHANH NHẤT , CON NÍT CŨNG LÀM ĐƯỢC.</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
        <div className="question wow fadeInUp">
          <a href="/" className="khung_hinh">
            <img src="./lienminhshop/images/q12.png" alt="for react" />
          </a>
          <div className="question_content">
            <a href="/">LIENMINHSHOP.VN CÓ UY TÍN KHÔNG ???????</a>
            <iframe title="/" className="like_fb" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width={450} height={80} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
            <br />
            <span>Bởi Trương Thanh Nam <b>|</b> Vào 10/11/2018</span>
          </div>
        </div>
        {/* End question */}
      </div>
      {/* End list_question */}
    </div>
    {/* End questtion_space */}
  </div>
</div>
        );
    }
}

export default Question;