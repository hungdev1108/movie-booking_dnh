import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../BookMovieTickets/Home.module.css";
import { addSeat } from "../../Redux/action";

export class SeatList extends Component {
  toggleCheck = (seat) => {
    this.props.dispatch(addSeat(seat));
  };

  render() {
    return (
      <div>
        <h4 className="text-white fs-4">Màn hình</h4>
        <div>
          <table className="table">
            <tbody>
              {this.props.seatList?.map((seatRow) => {
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
                          <td key={seat.soGhe} className="border-0 px-0 text-center">
                            <label
                              for={seat.soGhe}
                              className={style.ghe}
                              value={seat.soGhe}
                            >
                              {seat.soGhe}
                            </label>
                            <input
                              //   style={{ opacity: "0" }}
                              onClick={() => this.toggleCheck(seat)}
                              id={seat.soGhe}
                              type={"checkbox"}
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
  console.log(state.seatReducer.seatList);
  return {
    seatList: state.seatReducer.seatList,
  };
};

export default connect(mapStateToProps)(SeatList);
