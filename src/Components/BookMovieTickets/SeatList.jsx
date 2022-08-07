import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../BookMovieTickets/Home.module.css";

export class SeatList extends Component {
  render() {
    console.log(this.props.seatList);
    return (
      <div>
        <h4 className="text-white fs-4">Màn hình</h4>
        <div>
          <table className="table">
            <tbody>
              {this.props.seatList.map((seatRow) => {
                if (seatRow.hang === "") {
                  return (
                    <tr key={seatRow.hang}>
                      <th className="text-warning fs-4 border-0">{seatRow.hang}</th>
                      {seatRow.danhSachGhe.map((seat) => {
                        return (
                          <td key={seat.soGhe} className="border-0">
                            <span className="text-center text-warning fs-4">
                              {seat.soGhe}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                } else {
                  return (
                    <tr key={seatRow.hang}>
                      <th className="text-warning fs-4 border-0">{seatRow.hang}</th>
                      {seatRow.danhSachGhe.map((seat) => {
                        return (
                          <td key={seat.soGhe} className="border-0">
                            <input
                              className={style.ghe}
                              disabled={seat.daDat}
                              value={seat.soGhe}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // propName: state
    seatList: state.seat.seatList,
  };
};

export default connect(mapStateToProps)(SeatList);
