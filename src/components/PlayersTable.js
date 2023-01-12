import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddButton from './AddButton';

function PlayersTable(props) {

    const onAddHandler = (playerID) => {
        console.log(playerID)
        props.onAddHandler(playerID)
    };

    const DisplayData=props.players.map(
        (player)=>{
            return(
                <tr key={player.id}>
                    <td>{player.first_name} {player.last_name}</td>
                    <td>{player.position}</td>
                    <td>{player.team_city}</td>
                    <td>{player.total_points}</td>
                    <td><AddButton player = {player} onAddHandler={onAddHandler}/></td>
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
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>                           
                    {DisplayData}                           
                </tbody>
            </Table>
          );
}

export default PlayersTable