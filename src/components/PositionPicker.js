import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MDBInput, MDBCol } from "mdbreact";
import './SearchBar.css'

function PositionPicker(props) {

    const [searchTerm, setSearchTerm] = useState('')

    const setPosition = (event) => {
        props.onPositionClick(event.target.value)
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={setPosition.bind(this)}>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="All"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>
        
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="QB"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">QB</label>
        
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="RB"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">RB</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" value="WR"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio4">WR</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off" value="TE"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio5">TE</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autocomplete="off" value="K"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio6">K</label>
        </div>
      );
}

export default PositionPicker;