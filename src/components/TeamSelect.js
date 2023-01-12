import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TeamSelect(props) {


    const setTeam = (event) => {
       props.setTeam(event.target.value)
    }

    return (
        <select className="form-select" aria-label="Default select example" onChange={setTeam.bind(this)}>
            <option defaultValue>Select a team...</option>
            <option value="Arlington">Arlington Renegades</option>
            <option value="Houston">Houston Roughnecks</option>
            <option value="DC">DC Defenders</option>
            <option value="Orlando">Orlando Guardians</option>
            <option value="San">San Antonio Brahmas</option>
            <option value="Seattle">Seattle Sea Dragons</option>
            <option value="St.">St. Louis Battlehawks</option>
            <option value="Vegas">Vegas Vipers</option>
        </select>
      );
}

export default TeamSelect;