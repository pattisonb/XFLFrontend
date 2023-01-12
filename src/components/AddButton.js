import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function AddButton(props) {

    const onAddHandler = () => {
        console.log(props.player)
        props.onAddHandler(props.player.id)
    };
    
    if (props.player.team_id == 0) {
        return (
            <Button onClick={onAddHandler} className="btn btn-success">Add</Button>
        )
    }
}

export default AddButton;