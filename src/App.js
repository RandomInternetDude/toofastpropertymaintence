import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";



function App() {

  const [serviceDate, setServiceDate] = useState(new Date());
  const [serviceOption, setServiceOption] = useState();
  
  const requestedDate = (date) => {
    setServiceDate(date)
    console.log(date);
    console.log(serviceOption);
  }
  const serviceOptions = [
    {value:"paper-sealent" , label:"Paper-sealent"},
    {value:"painting" , label:"Painting"},
    {value:"HVAC" , label:"Hvac"},

  ]




  return (
    <div className="App">
      <h1>Too Fast Property maintence</h1>
      <form>
        <label for="fname">name:</label><br/>
        <input type="text" id="fname"/>
      </form>

      <DatePicker selected={serviceDate} onChange={date => requestedDate(date)} />
      <Select options={serviceOptions} onChange={option => setServiceOption(option)}/>
    </div>
  );
}

export default App;
