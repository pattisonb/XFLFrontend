import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DropButton(props) {

    const onDropHandler = () => {
        props.onDropHandler(props.player.id)
    };

    return (
        <Button onClick={onDropHandler} className="btn btn-danger">Drop</Button>
    )
}

export default DropButton;