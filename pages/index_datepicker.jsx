import { Divider, Button, DatePicker, Space } from "antd";
import React, { useState, useEffect } from 'react';
// import DatePicker from '../components/datepicker'
import Layout  from '../components/layout'

export default function index_datepicker() {
  const [yearNum, setYearNum] = useState("--");
  const [monthNum, setMonthNum] = useState("--");
  const [dayNum, setDayNum] = useState("--");
  const [errorBirthday, setErrorBirthday] = useState(false);
  const [ birthdayVal, setBirthdayVal ] = useState("")
  const handleBirthday = (date, dateString) => {
    setBirthdayVal(date, dateString);
    if(date !== ""){
      setErrorBirthday(false);
      setErrorBirthday("");
    };
  };
  
  

  const handleSubmit = (e) => {
    if (birthdayVal === "" || birthdayVal === null) {
      setErrorBirthday(true);
      setErrorBirthday("Must be required");
      setDayNum("--");
      setMonthNum("--");
      setYearNum("--");
    } else {
      setErrorBirthday(false);
      setErrorBirthday("");

      var today = new Date();
      var birthday = new Date(birthdayVal);
      
      // var setYearNum;
      
      if (
        today.getMonth() > birthday.getMonth() ||
        (today.getMonth() == birthday.getMonth() &&
          today.getDate() >= birthday.getDate())
      ) {
        setYearNum(today.getFullYear() - birthday.getFullYear());
      } else {
        setYearNum(today.getFullYear() - birthday.getFullYear() - 1);
      }

      // // var setMonthNum;
      if (today.getDate() >= birthday.getDate()) {
        setMonthNum(today.getMonth() - birthday.getMonth());
      } else if (today.getDate() < birthday.getDate()) {
        // setMonthNum(today.getMonth() - birthday.getMonth() - 1);
        setMonthNum("--");
      } else{
        setMonthNum(setMonthNum < 0 ? setMonthNum + 12 : setMonthNum);
      }


      // // var days;
      // // days of months in a year
      var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthday.getDate()) {
        setDayNum(today.getDate() - birthday.getDate());
      } else if ( today.getDate() <= birthday.getDate() ) {
        setErrorBirthday(true);
        setErrorBirthday("Must be real");
        setDayNum("--");
        setMonthNum("--");
        setYearNum("--");
      } else {
        setDayNum(
          today.getDate() - birthday.getDate() + monthDays[birthday.getMonth()]
        );
      }

      if ( setDayNum < 0 && setMonthNum < 0 && setYearNum < 0){
        setErrorBirthday(true);
        setErrorBirthday("Must be real");
      }
    }
  };
  


  return (
    <Layout>
      <h2 className="content">When Is Your Birthday?</h2>
      <div className="card">
        <Space className="topSection" style={{ display: "flex" }}>
          <Space className="input" direction="vertical">
            <label className={errorBirthday ? "title error-title" : "title"}>
              BIRTHDAY
            </label>
            <DatePicker
              className={errorBirthday ? "datepicker error" : "datepicker"}
              onChange={handleBirthday}
              placeholder="YYYY-MM-DD"
            />
            <small className="errorMessage">{errorBirthday}</small>
            <Button className="primary" type="submit" onClick={handleSubmit}>
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="48.5" cy="48.5" r="48.5" fill="#864CFF" />
                <path
                  d="M48.5 70C48.5 57.8497 38.4264 48 26 48M48.5 70C48.5 57.8497 58.5736 48 71 48M48.5 70V26.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </Button>
          </Space>
        </Space>
        <Divider className="line" />

        <Space direction="vertical">
          <h1 className="content">
            <span className="empty">{yearNum}</span>years
          </h1>
          <h1 className="content">
            <span className="empty">{monthNum}</span>months
          </h1>
          <h1 className="content">
            <span className="empty">{dayNum}</span>days
          </h1>
        </Space>
      </div>
    </Layout>
  );
}
