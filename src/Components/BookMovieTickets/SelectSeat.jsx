import React, { Component } from "react";
import style from "./Home.module.css";
import { connect } from "react-redux";
import { addSeat, isCheck, pay, upload } from "../../Redux/action";

export class SelectSeat extends Component {
  handleDelete = (seat) => {
    this.props.dispatch(addSeat(seat));
    this.props.dispatch(isCheck(seat));
  };

  handleSubmit = (seat) => {
    this.props.dispatch(pay(seat));
  };

  sumTotal = () => {
    console.log(this.props.selectSeat);
  };

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
              {this.props.selectSeat?.map((item) => {
                return (
                  <tr key={item.soGhe} className="text-warning">
                    <td className="text-center">{item.soGhe}</td>
                    <td>{item.gia}đ</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(item)}
                        style={{ color: "red" }}
                        className="btn border-0 fs-5"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="fs-5">Tổng tiền</td>
                <td className="text-warning">
                  {this.props.selectSeat.reduce((total, seatItem, index) => {
                    return (total += seatItem.gia);
                  }, 0)}
                  đ
                </td>
                <td>
                  <button className="fs-5 border-0" onClick={() => this.handleSubmit()}>
                    Thanh Toán
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectSeat: state.selectSeatReducer.selectSeat,
  };
};

export default connect(mapStateToProps)(SelectSeat);
