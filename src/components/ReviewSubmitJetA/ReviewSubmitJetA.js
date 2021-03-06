import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  parseISO,
  getHours,
  getMinutes,
  getDate,
  getMonth,
  getYear,
} from "date-fns";

function ReviewSubmitJetA() {
  const newAppointment = useSelector((state) => state.newAppointment);
  const dispatch = useDispatch();

  // working out date for display from service form and datepicker
  // assisted by https://stackoverflow.com/questions/25159330/convert-an-iso-date-to-the-date-format-yyyy-mm-dd-in-javascript
  //const displayDate = (parseISO(newAppointment.appointment_date));
  const date = new Date(newAppointment.appointment_date);
  const year = getYear(date);
  const month = getMonth(date) + 1;
  const dt = getDate(date);
  const hour = getHours(date);
  const minutes = getMinutes(date);

  const displayDate =
    (month < 10 ? "0" + month : month) +
    "/" +
    (dt < 10 ? "0" + dt : dt) +
    "/" +
    (year < 10 ? "0" + year : year) +
    " " +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  const createAppointment = () => {
    dispatch({
      type: "CREATE_APPOINTMENT",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_CONFIRM",
      url: "/email-confirm",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_ADMIN",
      url: "/email-admin",
      payload: newAppointment,
    });
    dispatch({
      type: 'SEND_ALERT_ONE',
      url: '/sms-alert-one',
      payload: newAppointment
    });
    dispatch({
      type: 'SEND_ALERT_TWO',
      url: '/sms-alert-two',
      payload: newAppointment
    });
    dispatch({
      type: 'SEND_ALERT_THREE',
      url: '/sms-alert-three',
      payload: newAppointment
    });
    dispatch({
      type: "SET_RESET",
    });
  };

  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h4>Please Review Your Jet Refueling Service Request</h4>
          </div>
          <div className="">
            <p className="md text-center">Service Details</p>
            <div className="text-center m-5 ">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Volume: {newAppointment.fuel_qty}</p>
              </section>
              <section className="m-1">
                <p className="lead text-bold">Oil</p>
                <p className="sm">Type: {newAppointment.oil_type}</p>
                <p className="sm">Amount: {newAppointment.oil_qty}qts</p>
              </section>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="md text-center m-2">Appointment Details</p>
            <p className="md text-center m-2">N{newAppointment.tail}</p>
            <div class="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Customer Information</p>
                <p className="sm">
                  Full Name: {newAppointment.first} {newAppointment.last}
                </p>
                <p className="sm">Phone: {newAppointment.phone}</p>
                <p className="sm">Email: {newAppointment.email}</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Requested Date and Time</p>
                <p className="sm">{displayDate}</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Service Details</p>
                <p className="sm">{newAppointment.additional_serv}</p>
              </section>
            </div>

            <div className="flex btn-grouping">
              <Link to="/JetAService">
                <button className="btn">Back</button>
              </Link>
              <Link to="/ApptSuccess">
                <button className="btn" onClick={createAppointment}>
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ReviewSubmitJetA;
