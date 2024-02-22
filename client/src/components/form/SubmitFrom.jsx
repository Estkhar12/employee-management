import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import "./style.css";
import axios from 'axios';
import { apiRequest } from "../../requestMethods";


function SubmitFrom() {
  let countryData = Country.getAllCountries();

  const [countries, setCountries] = useState(countryData);
  const [states, setStates] = useState([]);
  const [inputs, setInputs] = useState({});
  const [selected, setSelected] = useState({country: null, state: null});

  useEffect(() => {
    const getStateData = () => {
      const stateData = State.getStatesOfCountry(selected.country?.isoCode)
      setStates(stateData);
    }
    getStateData();

  }, [selected.country])

  const handleSelected = (e) => {
    const {name, value} = e.target
    const data = JSON.parse(value);
    setSelected((prev) => {
      return {...prev, [name]: data}
    })
  }


  const handleChange = (e) => {
    const {name, value} = e.target;

    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
    if(JSON.stringify(inputs) === '{}') return console.log("Enter all details");
    if(!selected.country || !selected.state) return console.log("Please select country and state both");
    const dataToInsert = {
      ...inputs,
      country: selected.country.name,
      state: selected.state.name
    }
    console.log(dataToInsert);
    try {
      const data = await axios.post('/create', dataToInsert)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="profile">
        <h2>Employee Information</h2>
        <div className="input-boxes">
          <div className="input-box">
            <label>Employee Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              // defaultValue={me.name}
            />
          </div>
          <div className="input-box">
            <label>Emp. Address</label>
            <input
              name="address"
              onChange={handleChange}
              type="text"
              // defaultValue={me.email}
            />
          </div>
          <div className="input-box">
            <label>Emp. Designation</label>
            <input
              name="designation"
              onChange={handleChange}
              type="text"
              // defaultValue={me.email}
            />
          </div>

          <div className="input-box">
            <label>Country</label>
            <br />
            <select
              name="country"
              onChange={handleSelected}
            >
              <option>--Select Country--</option>
              {countries.map((country) => (
                <option value={JSON.stringify(country)}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>State</label>
            <br />

            <select
              name="state"
              // defaultValue={me.course}
              onChange={handleSelected}
            >
              <option>--Select State--</option>
              {states.map((state) => (
                <option value={JSON.stringify(state)}>{state.name}</option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>Home Address</label>
            <input
              name="homeAddress"
              onChange={handleChange}
              type="text"
              // defaultValue={me.email}
            />
          </div>

          <div className="input-box">
            <label>Current Address</label>
            <input
              name="currentAddress"
              onChange={handleChange}
              type="text"
              // defaultValue={me.mobile}
            />
          </div>
        </div>
        <div className="btn">
          <button
             onClick={handleUpdate}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="empList">
        <div className="listItem">
          <p>Estkhar Ansari</p>
          <p>Employee Address</p>
          <p>Designation</p>
          <p>Country</p>
          <p>State</p>
        </div>
      </div>
    </div>
  );
}

export default SubmitFrom;
