import React, { Component } from "react";
import style from "./Home.module.css";

export class SelectSeat extends Component {
  render() {
    return (
      <div className="selectSeat mt-5">
        <div className="selectSeat-top">
          <div className="d-flex mt-2">
            <div className={style.gheDuocChon}></div>
            <span className="text-white fs-4 mx-3">Ghế đã đặt</span>
          </div>
          <div className="d-flex mt-2">
            <div className={style.gheDangChon}></div>
            <span className="text-white fs-4 mx-3">Ghế đang chọn</span>
          </div>
          <div className="d-flex mt-2">
            <div className={style.gheChuaChon}></div>
            <span className="text-white fs-4 mx-3">Ghế chưa đặt</span>
          </div>
        </div>
        <div className="selectSeat-body mt-4">
          <table className="table table-bordered text-white">
            <thead>
              <tr>
                <th scope="col" className="fs-5">
                  Số ghế
                </th>
                <th scope="col" className="fs-5">
                  Giá
                </th>
                <th scope="col" className="fs-5">
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-warning">
                <td>A1</td>
                <td>150.000</td>
                <td style={{ color: "red" }}>X</td>
              </tr>
              <tr className="text-warning">
                <td>A2</td>
                <td>150.000</td>
                <td style={{ color: "red" }}>X</td>
              </tr>
              <tr>
                <td className="fs-5">Tổng tiền</td>
                <td className="text-warning">300.000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SelectSeat;
