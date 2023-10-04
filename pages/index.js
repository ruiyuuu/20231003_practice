import { Input, Divider, Button } from 'antd';
import React, { useState } from 'react';

export default function index() {

  const [ yearVal, setYearVal ] = useState("")
  const [ monthVal, setMonthVal ] = useState("")
  const [ dayVal, setDayVal ] = useState("")
  const [ yearNum , setYearNum ] = useState("--")
  // const [ errorDayBorder, setErrorDayBorder ] = useState(false)
  // const [ errorMonthBorder, setErrorMonthBorder ] = useState(false)
  // const [ errorYearBorder, setErrorYearBorder ] = useState(false)
  const [ errorYear, SetErrorYear ] = useState("")
  const [ errorMonth, SetErrorMonth ] = useState("")
  const [ errorDay, SetErrorDay ] = useState("")

  const handleYear = (e) => {
    setYearVal(e.target.value)
  }

  const handleMonth = (e) => {
    setMonthVal(e.target.value)
  }

  const handleDay = (e) => {
    setDayVal(e.target.value)
  }

  const handleSubmit = (e) => {
    if( yearVal === "" ){
      SetErrorYear("Must be required")
    } else if ( yearVal >= 2023){
      SetErrorYear("Must be in the past")
    } else {
      SetErrorYear("")
      SetErrorYear(false)
      setYearNum(  2023 - yearVal)
    }

    if( monthVal === "" || monthVal > 12 || monthVal < 0 ){
      SetErrorMonth("Must be a valid month")
    } else {
      SetErrorMonth("")
      SetErrorMonth(false)
    }

    if( dayVal === "" ){
      SetErrorDay("Must be a valid day")
    } else {
      SetErrorDay("")
      SetErrorDay(false)
    }

    
  }
    


  
  
  

  return (
    <>
      <h2 className='content'>When Is Your Birthday?</h2>
      <div className='card'>
        <space className="topSection" style={{ display: 'flex' }}>
          <space className="input" direction="vertical">
            <label className={ errorDay ? 'title error-title' : 'title' }>DAY</label>
            <Input className={ errorDay ? 'text error' : 'text'} placeholder="DD" value={dayVal} onChange={handleDay} required />
            <small className='errorMessage'>{errorDay}</small>
          </space>
          <space className="input" direction="vertical">
            <label className={ errorMonth ? 'title error-title' : 'title' }>MONTH</label>
            <Input className={ errorMonth ? 'text error' : 'text'} placeholder="MM" value={monthVal} onChange={handleMonth} type='number' inputMode='numeric' maxLength={2} required />
            <small className='errorMessage'>{errorMonth}</small>
          </space>
          <space className="input" direction="vertical">
            <label className={ errorYear ? 'title error-title' : 'title' }>YEAR</label>
            <Input className={ errorYear ? 'text error' : 'text'} placeholder="YYYY" value={yearVal} onChange={handleYear} type='number' inputMode='numeric' maxLength={4} required />
            <small className='errorMessage'>{errorYear}</small>
          </space>
        </space>
        <Divider className='line' />
        <Button className='primary' type="submit"  onClick={handleSubmit}>
          <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48.5" cy="48.5" r="48.5" fill="#864CFF"/>
          <path d="M48.5 70C48.5 57.8497 38.4264 48 26 48M48.5 70C48.5 57.8497 58.5736 48 71 48M48.5 70V26.5" stroke="white" strokeWidth="2"/>
          </svg>
        </Button>
        <space direction="vertical">
          <h1 className='content'><span className='empty'>{yearNum}</span>years</h1>
          <h1 className='content'><span className='empty'>--</span>months</h1>
          <h1 className='content'><span className='empty'>--</span>days</h1>
        </space>
      </div>
    </>
  )
}
