import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function StartButton(props) {

    const onStart = () => {
        props.onStart(props.player)
    };

    const onCancel = () => {
        props.onCancel(props.player)
    };

    if (props.changingLineup) {
        return (
            <Button onClick={onCancel} className="btn btn-primary">Cancel</Button>
        )
    }
    return (
        <Button onClick={onStart} className="btn btn-primary">Start</Button>
    )
}

export default StartButton;