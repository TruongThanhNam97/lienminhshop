import React, { Component } from 'react';
import Data from "./Data.json"

class SeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : Data
    }
  }
  componentWillMount() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "../effect.js";
    head.appendChild(script);
  }

  render() {
    return (
      <div className="section3 wow fadeInUp" data-wow-delay="0.8s">
        <div className="container">
          <div className="title_account">
            <div className="row">
            {
              this.state.data.map((value,key)=>{
                if (value.id === parseInt(this.props.match.params.id))
                {
                  return (
                    <div className="col-md-9"  key={key}>
                    <div className="row">
                    <div className="col-md-7">
                <h4>{value.id+" - "+value.khung+" - "+value.rank}</h4>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-6">
                    <p>{value.card}</p>
                  </div>
                  <div className="col-6">
                    <p>{value.atm}</p>
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
              <div className="col-md-3">
                <div className="row">
                  <div className="col-6">
                    <a href="/" className="btn btn-danger muadi muangay">Mua ngay</a>
                  </div>
                  <div className="col-6">
                    <a href="/" className="btn btn-danger datcoc">Đặt cọc</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nv_menu">
            <ul>
              <li className="active_nv_menu">
                <a href="/" className="btn btn-primary">thông tin</a>
              </li>
              <li>
                <a href="/" className="btn btn-primary">Trang phục (46)</a>
              </li>
              <li>
                <a href="/" className="btn btn-primary">Tướng (full tướng)</a>
              </li>
            </ul>
          </div>
          <div className="set_content">
            <ul>
              <li className="active_set_content">
                <div className="account_infos">
                  <div className="image_info">
                    <img src="../images/thongtin1.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin2.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin3.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin4.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin5.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin6.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin7.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin8.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin9.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin10.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin11.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin12.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin13.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin14.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin15.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin16.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin17.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin18.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin19.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin20.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin21.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin22.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin23.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin24.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin25.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin26.png" alt="for react" />
                  </div>
                  <div className="image_info">
                    <img src="../images/thongtin27.png" alt="for react" />
                  </div>
                </div>
              </li>
              <li>
                <div className="loctheoskin mb-3">
                  <a href="/" className="btn btn-danger active_skin" data-skin="*">Tất cả</a>
                  <a href="/" className="btn btn-danger" data-skin=".toithuong">Tối thượng</a>
                  <a href="/" className="btn btn-danger" data-skin=".thanthoai">Thần thoại</a>
                  <a href="/" className="btn btn-danger" data-skin=".huyenthoai">Huyền thoại</a>
                  <a href="/" className="btn btn-danger" data-skin=".suthi">Sử thi</a>
                </div>
                <div className="skin_account">
                  <div className="skin toithuong">
                    <img src="../images/skin.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw công nghệ</h3>
                      <a href="https://www.youtube.com/watch?v=RPPrQxxcrjg" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin toithuong">
                    <img src="../images/skin1.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw hóa thạch</h3>
                      <a href="https://www.youtube.com/watch?v=vTFYdLPvkTw" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin thanthoai">
                    <img src="../images/skin2.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw tuần lộc</h3>
                      <a href="https://www.youtube.com/watch?v=zWGTKaWYmDA" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin huyenthoai">
                    <img src="../images/skin3.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw sâu róm</h3>
                      <a href="https://www.youtube.com/watch?v=kSDfJMtDeik" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin4.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw biển sâu</h3>
                      <a href="https://www.youtube.com/watch?v=si6gv_HAfec" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin5.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw múa lân</h3>
                      <a href="https://www.youtube.com/watch?v=1zwxmENLqjQ" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin6.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw cổ máy chiến đấu</h3>
                      <a href="https://www.youtube.com/watch?v=k7Si-y6XnFY" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin7.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw sa mạc</h3>
                      <a href="https://www.youtube.com/watch?v=nI3g3D_rY4s" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin8.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw chó con</h3>
                      <a href="https://www.youtube.com/watch?v=jRSVvpRRUiY" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                  <div className="skin suthi">
                    <img src="../images/skin9.png" alt="for react" />
                    <div className="cheo" />
                    <div className="name_skin">
                      <h3>Kogmaw bướm chúa</h3>
                      <a href="https://www.youtube.com/watch?v=vZAmAylap5k" className="btn btn-secondary">
                        <div className="fa fa-youtube" />
                      </a>
                    </div>
                  </div>
                  {/* End skin */}
                </div>
              </li>
              <li>
                <div className="locchamp mb-3">
                  <a href="/" className="btn btn-danger active_champ" data-champ="*">Tất cả</a>
                  <a href="/" className="btn btn-danger" data-champ=".xathu">Xạ thủ</a>
                  <a href="/" className="btn btn-danger" data-champ=".hotro">Hỗ trợ</a>
                  <a href="/" className="btn btn-danger" data-champ=".dausi">Đấu sĩ</a>
                  <a href="/" className="btn btn-danger" data-champ=".phapsu">Pháp sư</a>
                  <a href="/" className="btn btn-danger" data-champ=".satthu">Sát thủ</a>
                  <a href="/" className="btn btn-danger" data-champ=".dodon">Đỡ đòn</a>
                </div>
                <div className="list_champion">
                  <div className="champion xathu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin3.png" alt="for react" />
                    <img src="../images/skin4.png" alt="for react" />
                    <img src="../images/skin5.png" alt="for react" />
                    <img src="../images/skin6.png" alt="for react" />
                    <img src="../images/skin7.png" alt="for react" />
                    <img src="../images/skin8.png" alt="for react" />
                    <img src="../images/skin9.png" alt="for react" />
                    <img src="../images/cham1.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 10</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion xathu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin3.png" alt="for react" />
                    <img src="../images/skin4.png" alt="for react" />
                    <img src="../images/skin5.png" alt="for react" />
                    <img src="../images/skin6.png" alt="for react" />
                    <img src="../images/skin7.png" alt="for react" />
                    <img src="../images/skin8.png" alt="for react" />
                    <img src="../images/skin9.png" alt="for react" />
                    <img src="../images/cham2.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 10</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion xathu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin3.png" alt="for react" />
                    <img src="../images/skin4.png" alt="for react" />
                    <img src="../images/skin5.png" alt="for react" />
                    <img src="../images/skin6.png" alt="for react" />
                    <img src="../images/skin7.png" alt="for react" />
                    <img src="../images/skin8.png" alt="for react" />
                    <img src="../images/skin9.png" alt="for react" />
                    <img src="../images/cham3.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 10</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion phapsu">
                    <img src="../images/skin0.jpg" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 0</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dausi">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin3.png" alt="for react" />
                    <img src="../images/skin4.png" alt="for react" />
                    <img src="../images/skin5.png" alt="for react" />
                    <img src="../images/skin6.png" alt="for react" />
                    <img src="../images/skin7.png" alt="for react" />
                    <img src="../images/skin8.png" alt="for react" />
                    <img src="../images/skin9.png" alt="for react" />
                    <img src="../images/cham4.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 10</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dausi">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham5.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dausi">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham6.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion hotro">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham7.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion hotro">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham8.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion hotro">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin0.jpg" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dodon">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham1.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dodon">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham2.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dodon">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham3.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion dodon">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham4.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion satthu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham5.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion satthu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham6.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion satthu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham7.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion satthu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/cham8.PNG" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                  <div className="champion satthu">
                    <img src="../images/skin.png" alt="for react" />
                    <img src="../images/skin1.png" alt="for react" />
                    <img src="../images/skin2.png" alt="for react" />
                    <img src="../images/skin0.jpg" alt="for react" />
                    <div className="button_next">
                      <div className="fa fa-chevron-right" />
                    </div>
                    <div className="button_previous">
                      <div className="fa fa-chevron-left" />
                    </div>
                    <div className="current_skin">
                      <h4>Skin hiện có : 3</h4>
                    </div>
                  </div>
                  {/* End champion */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SeeDetail;