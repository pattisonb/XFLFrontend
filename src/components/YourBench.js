import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DropButton from './DropButton';
import StartButton from './StartButton';

function YourBench(props) {

    const onDropHandler = (playerID) => {
        props.onDropHandler(playerID)
    };

    const onStart = (player) => {
        props.onStart(player)
    };

    const onCancel = (player) => {
        props.onCancel(player)
    };

    const DisplayData=props.players.map(
        (player)=>{
            return(
                <tr key={player.id}>
                    <td>{player.first_name} {player.last_name}</td>
                    <td>{player.position}</td>
                    <td>{player.total_points}</td>
                    <td><DropButton player = {player} onDropHandler={onDropHandler}/></td>
                    <td><StartButton player = {player} onStart={onStart} onCancel={onCancel} changingLineup = {props.changingLineup}/></td>
                </tr>
            )
        }
    )

        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>                           
                    {DisplayData}                           
                </tbody>
            </Table>
          );
}

export default YourBench