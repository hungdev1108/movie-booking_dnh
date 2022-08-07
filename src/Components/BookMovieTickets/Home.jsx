import React, { Component } from "react";
import SeatList from "./SeatList";
import SelectSeat from "./SelectSeat";
import { connect } from "react-redux";
import style from "./Home.module.css";

export class Home extends Component {
  render() {
    return (
      <div className={style.bookingMovie}>
        <div className={style.bg_overlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-8 mt-5">
              <h3 className="text-warning fs-2">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
              <div className={style.screen}></div>
              <SeatList />
            </div>
            <div className="col-4 mt-5">
              <h3 className="text-white fs-2">DANH SÁCH GHẾ BẠN CHỌN</h3>
              <SelectSeat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
